const {
  CloudinaryImageWithThumb,
  MongoCloudinaryImageInterface,
  KnexCloudinaryImageInterface,
} = require('./implementation');

// We're going to extend the integer field to store
// a number between 1-5 and represent this as a rating
const { CloudinaryImage } = require('@keystonejs/fields');

module.exports = {
  type: 'CloudinaryImageWithThumb',
  implementation: CloudinaryImageWithThumb,
  views: {
    Controller: CloudinaryImage.views.Controller,
    Field: CloudinaryImage.views.Field,
    Filter: CloudinaryImage.views.Filter,
    Cell: require.resolve('./views/Cell'),
  },
  adapters: {
    mongoose: MongoCloudinaryImageInterface,
    knex: KnexCloudinaryImageInterface,
  },
};
