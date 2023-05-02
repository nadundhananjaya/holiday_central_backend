import mongoose from "mongoose";

const Schema = mongoose.Schema


const HotelRoomType = new Schema({
    roomType: {
        type: "String",
        isRequired: true
    },
})

export default mongoose.model('HotelRoomType', HotelRoomType)
