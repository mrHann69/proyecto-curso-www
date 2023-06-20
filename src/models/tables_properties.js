const validator = require('validator');

users={
  login: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  },
  addres:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // using validator.js to validate email format
      notEmpty: true, // not allowing empty strings
      len: [5, 255], // length must be between 5 and 255 characters
      async customValidator(value) {
        // custom validator function that checks if email domain exists
        if (!validator.isFQDN(value.split('@')[1])) {
          throw new Error('Invalid email domain');
        }
      },
    },
  },
  phone:{
    type: DataTypes.STRING,
    allowNull: false
  },
}
