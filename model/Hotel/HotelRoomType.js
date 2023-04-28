import mongoose from "mongoose";

const Schema = mongoose.Schema


const HotelRoomType = new Schema({
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    facilityName: {
        type: "String",
        isRequired: true
    },
    extraCharge: {
        type: Number,
        required: false,
        default: null
    },
})

export default mongoose.model('HotelRoomType', HotelRoomType)
