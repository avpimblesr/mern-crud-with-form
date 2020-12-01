const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
  res.render("employee/addOrEdit", {
    viewTitle: "Insert Employee"
  });
});

router.post('/', (req, res) => {
  insertRecord(req, res)
});

function insertRecord(req,res) {
  let employee = new Employee();
  const {fullName, email, mobile, city} = req.body;
  employee.fullName = fullName
  employee.email = email
  employee.mobile = mobile
  employee.city = city

  employee.save((err,doc) => {
    if (!err)
    res.redirect('employee/list');
    else {
      console.log(`Error during record insertion: ${err}`);
    }
  });
}

router.get('/list', (req, res) => {
  res.json('from list');
});

module.exports = router;