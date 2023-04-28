import AirPlane from "../../model/Flight/AirPlane.js";
import Hotel from "../../model/Hotel/Hotel.js";
import express from "express";

export const AddAirPlane = (req, res) => {
    const airPlane = new AirPlane({
        airPlaneNo: "Sample AirPlane No",
        airLine: 'Sample AirLine'
    });

    airPlane.save().then(result => {
        console.log(result)
        res.send('Successfully Added!')
    }).catch(err => {
        console.log(err)
        res.send('Error!')
    })
}

export const UpdateAirplane = (req, res) => {
    const filter = {
        _id: req.id
    }

    const airPlane = new AirPlane({
        airPlaneNo: "Sample AirPlane No",
        airLine: 'Sample AirLine'
    });

    AirPlane.findByIdAndUpdate(filter, airPlane).then(result => {
        console.log(result)
        res.send('Successfully Updated')
    }).catch(err => {
        console.log(err)
        res.send('Error!')
    })

}

export const DeleteAirplane = (req, res) => {
    const filter = {
        _id: req.id
    }

    AirPlane.findOneAndRemove(filter).then(result => {
        console.log(result)
        res.send("Successfully Removed!")
    }).catch(err => {
        console.log(err)
        res.send('Error!!!')
    })
}


export const AirplaneList = (req, res) => {

    AirPlane.find().then(airPlanes => {
        res.send(airPlanes)
    })
}
