require('dotenv').config();

// console.log('CUSTOM_VAR:', process.env.CUSTOM_VAR);

Object.keys(process.env).forEach(function (key) {
  console.log('debug', key, process.env[key]);
});
