const { CloudinaryImage } = require('@keystonejs/fields');

module.exports = {
  CloudinaryImageWithThumb: CloudinaryImage.implementation,
  MongoCloudinaryImageInterface: CloudinaryImage.adapters.mongoose,
  KnexCloudinaryImageInterface: CloudinaryImage.adapters.knex,
};
