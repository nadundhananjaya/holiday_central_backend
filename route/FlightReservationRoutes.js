import express from "express";
import {
    deleteFlightReservation,
    flightReservationList,
    makeFlightReservation
} from "../controller/Flight/FlightReservationController.js";

const HotelReservationRoutes = express.Router()

HotelReservationRoutes.post('/add',makeFlightReservation)

HotelReservationRoutes.get('/list',flightReservationList)

HotelReservationRoutes.delete('/delete',deleteFlightReservation)

export default HotelReservationRoutes
