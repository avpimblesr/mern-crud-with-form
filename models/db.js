const mongoose = require('mongoose');
const connectString = 'mongodb://localhost:27017/EmployeeDB'
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(connectString, options, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.')
  }
  else {
    console.log('Error in DB connection: ' + err)
  }
})

require('./employee.model');