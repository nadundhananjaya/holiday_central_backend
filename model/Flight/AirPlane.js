import mongoose from "mongoose";

const Schema = mongoose.Schema

const AirPlane = new Schema({
    airPlaneNo: {
        type: String,
        required: true
    },
    airLine: {
        type: String,
        required: true
    },
})

export default mongoose.model('AirPlane', AirPlane)
