require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const initialiseData = require('./initial-data');

const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');

const ImageSchema = require('./lists/Image');
const MediumCategorySchema = require('./lists/MediumCategory');
const TechnologyCategorySchema = require('./lists/TechnologyCategory');
const ProjectSchema = require('./lists/Project');

const PROJECT_NAME = 'Keystone 4 POC';

Object.keys(process.env).forEach(function (key) {
  console.log('env:', key, process.env[key]);
});

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new MongooseAdapter({
    mongoUri: process.env.MONGO_URI,
  }),
  onConnect: initialiseData,
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList('User', {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('Image', ImageSchema);
keystone.createList('MediumCategory', MediumCategorySchema);
keystone.createList('TechnologyCategory', TechnologyCategorySchema);
keystone.createList('Project', ProjectSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

const onHeaders = require('on-headers');
const configureExpress = (app) => {
  // Add middleware to add a listener that can access the cookie header before the response is sent
  app.use((req, res, next) => {
    onHeaders(res, () => {
      // Should be an array; let's join it together
      const headerValue = Array.isArray(res.getHeader('set-cookie'))
        ? res.getHeader('set-cookie').join(' ')
        : '';
      console.log('Set-Cookie response header being set as...\nSet-Cookie: ', headerValue);
    });
    next();
  });

  app.set('trust proxy', true);
};

module.exports = {
  keystone,
  apps: [
    new GraphQLApp({
      apiPath: '/admin/api',
    }),
    new AdminUIApp({
      enableDefaultRoute: false,
      authStrategy,
    }),
    new NextApp({ dir: 'app' }),
  ],
  configureExpress,
};
