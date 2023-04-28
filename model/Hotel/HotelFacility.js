import mongoose from "mongoose";

const Schema = mongoose.Schema

const HotelFacility = new Schema({
    hotelId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    facility: {
        type: String,
        required: true
    }
})

export default mongoose.model('HotelFacility', HotelFacility)
