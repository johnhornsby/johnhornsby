const {
  CloudinaryImage,
  DateTime,
  Relationship,
  Select,
  Slug,
  Text,
  Url,
} = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const CloudinaryRelationship = require('../fields/CloudinaryRelationship');

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    slug: {
      type: Slug,
      from: 'title',
    },
    state: {
      type: Select,
      options: 'draft, published, archived',
      dataType: 'string',
      defaultValue: 'draft',
    },
    url: {
      type: Url,
    },
    completedAt: {
      type: DateTime,
    },
    strap: { type: Text },
    brief: { type: Wysiwyg },
    extended: { type: Wysiwyg },
    posterImage: { type: CloudinaryRelationship, ref: 'Image' },
    images: { type: CloudinaryRelationship, ref: 'Image', many: true },
    client: { type: Text, default: 'Internal' },
    technologies: { type: Relationship, ref: 'TechnologyCategory', many: true },
    mediums: { type: Relationship, ref: 'MediumCategory', many: true },
    participants: { type: Text },
    video: { type: Url },
  },
  labelField: 'title',
};
