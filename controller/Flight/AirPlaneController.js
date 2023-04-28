import AirPlane from "../../model/Flight/AirPlane.js";

export const AddAirPlane = (req, res) => {
    const airPlane = new AirPlane({
        airPlaneNo: req.body.airPlaneNo,
        airLine: req.body.airLine
    });

    airPlane.save().then(result => {
        console.log(result)
        res.send('Successfully Added!')
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
}

export const UpdateAirplane = (req, res) => {
    const filter = {
        _id: req.body.id
    }

    const airPlane = new AirPlane({
        _id : req.body.id,
        airPlaneNo: req.body.airPlaneNo,
        airLine: req.body.airLine
    });

    AirPlane.findByIdAndUpdate(filter, airPlane).then(result => {
        console.log(result)
        res.send(`Successfully Updated`)
    }).catch(err => {
        console.log(err)
        res.send('Error!')
    })

}

export const DeleteAirplane = (req, res) => {
    const filter = {
        _id: req.body.id
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
