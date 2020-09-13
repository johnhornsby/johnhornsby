const { Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    key: {
      type: Text,
      isRequired: true,
    },
    name: {
      type: Text,
      isRequired: true,
    },
  },
};
