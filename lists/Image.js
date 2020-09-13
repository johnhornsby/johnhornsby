const { Slug, Text } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');

const CloudinaryImageWithThumb = require('../fields/CloudinaryImageWithThumb');

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'johnhornsby',
});

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
    description: {
      type: Wysiwyg,
    },
    image: { type: CloudinaryImageWithThumb, adapter: cloudinaryAdapter },
  },
  labelField: 'title',
};
