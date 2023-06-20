const validator = require('validator');

async function customValidator(value){
// custom validator function that checks if email domain exists
if (!validator.isFQDN(value.split('@')[1])) {
  throw new Error('Invalid email domain');
}
}
