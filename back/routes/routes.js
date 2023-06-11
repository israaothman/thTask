'use strict';


const express = require('express');
const router = express.Router();
const {getAllEmployees, getOneEmployee,addEmployeeHandler,updateEmployeeHandler,deleteEmployeeHandler} = require('../controller/employeesController');

router.get('/',getAllEmployees);
router.get('/employee/:id',getOneEmployee);
router.post('/addEmployee', addEmployeeHandler); 
router.put('/updateEmployee/:id', updateEmployeeHandler);
router.delete('/deleteEmployee/:id', deleteEmployeeHandler);


module.exports = router;