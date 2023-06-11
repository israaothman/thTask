'use strict';


const client = require("../model/client");

const getAllEmployees = (req, res) => {
  const sql = "SELECT * FROM employees;";
  client
    .query(sql)
    .then((data) => {
      return res.status(200).json(data.rows);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};
const getOneEmployee = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM employees where employee_id = ${id};`;
  client
    .query(sql)
    .then((data) => {
      return res.status(200).json(data.rows);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const addEmployeeHandler = (req, res) => {
  const { name, email, phone, address, department } = req.body;

  const sql = `INSERT INTO employees(name, email, phone, address, department) VALUES($1, $2, $3, $4, $5) RETURNING *;`;
  client
    .query(sql,[ name, email, phone, address, department])
    .then((data) => {
      return res.status(201).json(data.rows);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const updateEmployeeHandler = (req, res) => {
  const id = req.params.id;
  const { name, email, phone, address, department } = req.body;

  const sql = `UPDATE employees SET name=$1,email=$2, phone=$3, address=$4, department=$5 where employee_id = $6 RETURNING *;`;
  client
    .query(sql,[ name, email, phone, address, department,id])
    .then((data) => {
      return res.status(200).json(data.rows);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const deleteEmployeeHandler = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM employees WHERE employee_id=${id};`;
  client
    .query(sql)
    .then(() => {
      return res.status(204).json({});
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  addEmployeeHandler,
  updateEmployeeHandler,
  deleteEmployeeHandler,
};
