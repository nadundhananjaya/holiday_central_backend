import mongoose from "mongoose";

const Schema = mongoose.Schema;


const HotelRoom = new Schema({
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    roomType: {
        type: Schema.Types.ObjectId,
        ref: 'HotelRoomTypes',
        required: true
    },
    pricePerNight: {
        type: Number,
        required: true
    },
    maxPersons: {
        type: Number,
        required: true

    },
    noOfRooms : {
        type : Number,
        required : true
    }
})

export default mongoose.model('HotelRoom', HotelRoom)
