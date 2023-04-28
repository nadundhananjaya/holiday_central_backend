import mongoose from "mongoose";

const Schema = mongoose.Schema

const Customer = new Schema({
    customerName: {
        type: String,
        required: true
    },
    contact : {
        type: String,
        required: true
    },
    NIC : {
        type : String,
        required :true
    }
})

export default mongoose.model('Customer', Customer)
