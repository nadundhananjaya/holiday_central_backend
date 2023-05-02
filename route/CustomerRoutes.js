import express from "express";
import {AddCustomer, CustomerList, DeleteCustomer, UpdateCustomer} from "../controller/Customer/Customer.js";

const CustomerRoutes = express.Router();


CustomerRoutes.get('/list',CustomerList);

CustomerRoutes.post('/add', AddCustomer)

CustomerRoutes.put('/update',UpdateCustomer)

CustomerRoutes.delete('/delete', DeleteCustomer)

export default CustomerRoutes
