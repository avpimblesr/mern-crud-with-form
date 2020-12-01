const mongoose = require('mongoose');

// In order to insert a new record into MongoDB, 
// call a .save() function from this schema object
const employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: 'This field is required.'
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  city: {
    type: String
  },
});

mongoose.model('Employee', employeeSchema);