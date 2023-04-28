import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Flight = new Schema({
    airPlane: {
        type: Schema.Types.ObjectId,
        ref: 'AirPlane',
        required: true
    },
    departureAirport: {
        type: String,
        required: true
    },
    departureTime: {
        type: String,
        required: true
    },
    arrivalAirport: {
        type: String,
        required: true
    },
    arrivalTime: {
        type: String,
        required: true
    },
    cabinClass: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    mealPreferences: {
        type: String,
        required: true
    },
    seatSelection: {
        type: String,
        required: true
    },
    noOfSeats: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Flight', Flight)
