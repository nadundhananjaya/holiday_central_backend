import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    hotel_name : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required : true,
        default : ""
    },
    city : {
        type : String,
        required : true,
        default: ""
    },
    state : {
        type : String,
        required : true,
        default: ""
    },
    zip : {
        type : Number,
        required : true,
        default: null
    },
    contact : {
        type : Number,
        required : true,
        default: null
    },
    lat: {
        type : Number,
        required : false,
        default : null
    },
    lng : {
        type : Number,
        required : false,
        default : null
    }
})

export default mongoose.model('hotel', HotelSchema)
