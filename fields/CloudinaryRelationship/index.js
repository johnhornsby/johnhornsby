// We're going to extend the integer field to store
// a number between 1-5 and represent this as a rating
const { Relationship } = require('@keystonejs/fields');

module.exports = {
  type: 'CloudinaryRelationship',
  isRelationship: true, // Used internally for this special case
  implementation: Relationship.implementation,
  views: {
    Controller: Relationship.views.Controller,
    Field: require.resolve('./views/Field'),
    // Field: Relationship.views.Field,
    Filter: Relationship.views.Filter,
    Cell: Relationship.views.Cell,
  },
  adapters: {
    mongoose: Relationship.adapters.mongoose,
    knex: Relationship.adapters.knex,
  },
  resolveBacklinks: Relationship.resolveBacklinks,
};
