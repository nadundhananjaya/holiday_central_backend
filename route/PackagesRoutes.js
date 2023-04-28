import express from "express";
import {AddPackage, PackageList} from "../controller/Packages/PackageController.js";

const PackagesRoutes = express.Router()

PackagesRoutes.get('/add',AddPackage)

PackagesRoutes.get('/list',PackageList)

export default PackagesRoutes

