require('./models/db');

const express = require('express');
const employeeController = require('./controllers/employee.controller');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'mainLayout',
  layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');


app.listen(3000, () => console.log('Express server started on port : 3000'));

app.use('/employee', employeeController);