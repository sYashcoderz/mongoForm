const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        validate: {
          validator: function(value) {
            return value.length <= 50; // maximum length
          },
          message: 'Field length exceeds the maximum allowed length.'
        }
      },
    lastName:{
        type: String,
        required: true,
        validate: {
            validator: function(value) {
              return value.length <= 50; // maximum length
            },
            message: 'Field length exceeds the maximum allowed length.'
          }
    },
    email:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    timestamp:{
        type: String,
        default: Date.now()
    }
})

const Register = mongoose.model("Register",RegisterSchema);

module.exports = Register;