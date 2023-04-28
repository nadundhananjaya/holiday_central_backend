import express from "express";
import {AddAirPlane, AirplaneList, DeleteAirplane, UpdateAirplane} from "../controller/Flight/AirPlaneController.js";

const AirPlaneRoutes = express.Router()

AirPlaneRoutes.get('/list', AirplaneList)

AirPlaneRoutes.post('/add',AddAirPlane)

AirPlaneRoutes.put('/update',UpdateAirplane)

AirPlaneRoutes.delete('/delete',DeleteAirplane)

export default AirPlaneRoutes
