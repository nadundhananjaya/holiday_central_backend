import mongoose from "mongoose"

const Schema = mongoose.Schema;

const HotelImage = new Schema({
    imgUrl: {
        type: String,
        required: true
    },
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel'
    }
})

export default mongoose.model('HotelImage', HotelImage)
