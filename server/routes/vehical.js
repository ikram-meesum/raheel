let express = require("express");
let route = express.Router();
//const mongoose = require("mongoose");

let Vehical = require("../models/vehical.model");

route.get("/", (req, res) => {
  console.log("Add New Vehical");
  Vehical.find({})
    .exec()
    .then((doc) => {
      res.json(doc);
      console.log("SINGLE VEHICAL", doc);
    })
    .catch((err) => console.log(err));
});

route.get("/:id", (req, res) => {
  let vid = req.params.id.toString();
  console.log(vid);

  Vehical.findById(vid)
    .exec()
    .then((doc) => {
      res.json(doc);
      console.log("SINGLE VEHICAL", doc);
    })
    .catch((err) => console.log(err));
});

route.post("/", async (req, res) => {
  console.log("INSERTED");

  const d = new Date();
  let currentYear = d.getFullYear();

  const vehicalData = new Vehical({
    orderno: req.body.orderno,
    mcno: req.body.mcno,
    carrierInfo: req.body.carrierinfo,
    carAddress1: req.body.caraddress1,
    carAddress2: req.body.caraddress2,
    dotno: req.body.dotno,
    drivername: req.body.drivername,
    driverphone: req.body.driverphone,
    driveremail: req.body.driveremail,
    dispachDate: req.body.dispachdate,
    pickupDate: req.body.pickupdate,
    deliverDate: req.body.deliverdate,
    shipvia: req.body.shipvia,
    totalPayment: req.body.payment,
    onDelivery: req.body.ondelivery,
    year: currentYear,
    make: req.body.make,
    model: req.body.model,
    typing: req.body.typing,
    quantity: req.body.quantity,
    pickupAddress1: req.body.picaddress1,
    // pickupAddress1
    pickupAddress2: req.body.picaddress2,
    pickupPhone: req.body.picphone,
    dropofAddress1: req.body.dropaddress1,
    dropofAddress2: req.body.dropaddress2,
    deliveryPhone: req.body.deliveryphone,
    uship: req.body.uship,
    weight: req.body.weight,
  });

  try {
    const result = await vehicalData.save();
    console.log(result); // result
    res.json(result);
  } catch (err) {
    console.error("Error ocured from insert vehical data: ", err);
  }
});

module.exports = route;
