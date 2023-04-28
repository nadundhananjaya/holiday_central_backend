import mongoose from "mongoose";

const Schema = mongoose.Schema;


const FlightReservation = new Schema({
    flightId: {
        type: Schema.Types.ObjectId,
        ref: 'Flight',
        isRequired: true
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        isRequired: true
    },
    reservationDate: {
        type: Date,
        required: true
    },
});


export default mongoose.model('FlightReservation', FlightReservation)
