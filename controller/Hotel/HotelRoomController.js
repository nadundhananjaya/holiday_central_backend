import HotelRoom from "../../model/Hotel/HotelRoom.js";

const requiredFields = [
    "hotelId",
    "roomType",
    "pricePerNight",
    "boardBasis",
]


export const AddHotelRoom = (req, res) => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    }
    else{
        const hotelRoom = {

        }
    }


}

export const UpdateHotelRoom = (req, res) => {

}

export const HotelRoomList = (req, res) => {

}

export const RemoveHotel = (req, res) => {

}
