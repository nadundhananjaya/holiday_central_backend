import Hotel from "../../model/Hotel/Hotel.js";
export const AddPackage = (req,res) => {
   const hotel = new Hotel({
       hotel_name : "Sample",
   });

   hotel.save().then(res => {
       console.log(res)
   }).catch(err => {
       console.log(err)
   })
}
export const PackageList = (req,res) => {
    res.send('List')
}

export const SearchPackage = (req,res) => {
    res.send("Search ...")
}
export const Update = (req,res)=> {
    res.send('update')
}

export const UnPublish = (req,res) => {
    res.send('un publish')
}

export const Remove = (req,res) => {
    res.send('remove')
}

