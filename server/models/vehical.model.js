let mongoose = require("mongoose");

let vehicalSchema = mongoose.Schema(
  {
    orderno: { type: String, uppercase: true },
    mcno: { type: String, uppercase: false },
    carrierInfo: { type: String, uppercase: true },
    carAddress1: { type: String, uppercase: true },
    carAddress2: { type: String, uppercase: true },
    dotno: { type: String, uppercase: true },
    drivername: { type: String, uppercase: true },
    driverphone: { type: String, uppercase: true },
    driveremail: { type: String, lower: true },
    dispachDate: Date,
    pickupDate: Date,
    deliverDate: Date,
    shipvia: String,
    totalPayment: Number,
    onDelivery: Number,
    year: Number,
    make: String,
    model: String,
    typing: String,
    quantity: String,
    pickupAddress1: String,
    pickupAddress2: String,
    pickupPhone: String,
    dropofAddress1: { type: String },
    dropofAddress2: { type: String },
    deliveryPhone: { type: String },
    uship: String,
    weight: { type: Number },
    // depart_id: { type: mongoose.Schema.Types.ObjectId, ref: "Fcpsward" },
    // supervisor_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Fcpssupervisor",
    // },
    ispresent: { type: String, default: "YES" },
  },
  { timestamps: true }
);

let Vehical = mongoose.model("vehical", vehicalSchema);
module.exports = Vehical;
