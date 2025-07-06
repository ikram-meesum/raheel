import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import axios from "axios";
import { ip } from "../components/ipAddress";
import { useNavigate } from "react-router";

export default function AddStudent() {
  const [allVehical, setAllVehical] = useState([]);

  let navigate = useNavigate();

  const getVehical = () => {
    axios
      .get("http://" + ip.address + ":3001/vehical")
      .then((response) => {
        console.log("vehical:", response.data);
        setAllVehical(response.data);
      })
      .catch((error) => {
        console.log("Error from get depart function: ", error);
      });
  };

  useEffect(() => {
    getVehical();
  }, []);

  // FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // INSERT DATA
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://" + ip.address + ":3001/vehical", {
        orderno: data.orderno,
        mcno: data.mcno,
        carrierinfo: data.carrierinfo,
        caraddress1: data.caraddress1,
        caraddress2: data.caraddress2,
        dotno: data.dotno,
        drivername: data.drivername,
        driverphone: data.driverphone,
        driveremail: data.driveremail,
        dispachdate: data.dispachdate,
        pickupdate: data.pickupdate,
        deliverdate: data.deliverdate,
        shipvia: data.shipvia,
        payment: data.payment,
        ondelivery: data.ondelivery,
        make: data.make,
        model: data.model,
        typing: data.typing,
        quantity: data.quantity,
        picaddress1: data.picaddress1,
        picaddress2: data.picaddress2,
        picphone: data.picphone,
        dropaddress1: data.dropaddress1,
        dropaddress2: data.dropaddress2,
        deliveryphone: data.deliveryphone,
        uship: data.uship,
        weight: data.weight,
      })
      .then((response) => {
        console.log("res: ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/vehical");

    // =====================

    // if (data.depart == "Select Depart") {
    //   alert("Please a valid department");
    // } else {
    //   axios
    //     .post("http://" + ip.address + ":3001/addfcps", {
    //       txtsname: data.orderno,
    //       txtfname: data.fname,
    //       txtemail: data.email,
    //       txtmobile: data.mobile,
    //       txtdoj: data.doj,
    //       txtdor: data.dor,
    //       txtdomicile: data.domicile,
    //       txtaccount_no: data.account,
    //       txtcnic: data.cnic,
    //       txtdob: data.dob,
    //       txtcmsid: data.cmsid,
    //       txtempid: data.empid,
    //       txtnationality: data.nationalty,

    //       txtrtmc: data.rtmcno,
    //       cmbgender: data.gender,
    //       cmbdepart: data.fruits, //---------------------------
    //       cmbsupervisor: data.supervisor,
    //       txtaddress: data.address,
    //       cmbgovt: data.govt,
    //       cmbpresent: data.present,
    //       txtremarks: data.remarks,
    //       cmbreligion: data.religion,
    //     })
    //     .then((response) => {
    //       console.log("r: ", response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   navigate("/current-fcps");
    // }
  };

  return (
    <section className="">
      <Navbar />

      <h2 className="text-3xl text-center font-bold text-slate-700 mt-9 mb-2">
        Register New Vehical
      </h2>
      <h2 className="text-sm text-center font-medium mb-9 text-slate-600">
        Enter New Vehical Detail Information
      </h2>
      {/* start alert */}
      <div
        className="flex items-center p-4 mt-6 mb-6 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 w-4/5 mx-auto"
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Important Message!</span> Please fill
          the vehical detail form carefully for registration.
        </div>
      </div>
      {/* end alert */}

      <div className="grid grid-cols-1 gap-4 w-4/5 mx-auto">
        <h1 className="text-xl font-semibold mb-3">INFORMATION DETAILS</h1>
      </div>

      <form
        className="lg:col-span-2 mt-3 mb-10"
        onSubmit={handleSubmit(onSubmit)}
        // onClick={()=> onSubmit}
      >
        <div className="grid gap-7 gap-y-2 text-sm grid-cols-1 mx-32 md:grid-cols-9">
          <div className="md:col-span-3 mb-3">
            <label className="">ORDER NUMBER</label>
            <input
              type="text"
              {...register("orderno", { required: true })}
              // name="address"
              // id="address"
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100 text-gray-800"
              // value=""
              //   placeholder="Enter Student name"
            />
            {errors.orderno && (
              <p className="text-red-700">Order number is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>MC NUMBER</label>
            <input
              type="text"
              {...register("mcno", { required: true })}
              // name="city"
              // id="city"
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100"
              // value=""
              //   placeholder="Valid email"
            />
            {errors.mcno && (
              <p className="text-red-700">MC Number is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>CARRIER INFORMATION</label>
            <input
              type="text"
              {...register("carrierinfo", { required: true })}
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Father Name"
            />
            {errors.carrierinfo && (
              <p className="text-red-700">Carrier Information is required.</p>
            )}
          </div>

          <div className="md:col-span-3 mb-3">
            <label>CARRIER ADDRESS 1.</label>
            <input
              type="text"
              {...register("caraddress1", { required: true })}
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Password"
            />
            {errors.caraddress1 && (
              <p className="text-red-700">Carrier Address 1 is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>CARRIER ADDRESS 2</label>
            <input
              type="text"
              {...register("caraddress2", { required: true })}
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Password"
            />
            {errors.caraddress2 && (
              <p className="text-red-700">Carrier address 2 is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>DOT NUMBER</label>
            <input
              type="text"
              {...register("dotno", { required: true })}
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Password"
            />
            {errors.dotno && (
              <p className="text-red-700">Dot number is required.</p>
            )}
          </div>

          <div className="md:col-span-3 mb-3">
            <label>DRIVER NAME</label>
            <input
              type="text"
              {...register("drivername", { required: true })}
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Mobile No"
            />
            {errors.drivername && (
              <p className="text-red-700">Driver name is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>DRIVER PHONE</label>
            <input
              type="text"
              {...register("driverphone", { required: true })}
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter CNIC No"
            />
            {errors.driverphone && (
              <p className="text-red-700">Driver phone is Requidred.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>DRIVER EMAIL</label>
            <input
              type="email"
              {...register("driveremail", { required: true })}
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Batch No"
            />
            {errors.driveremail && (
              <p className="text-red-700">Driver email is required.</p>
            )}
          </div>

          <div className="md:col-span-3 mb-3">
            <label>DISPATCH DATE</label>
            <input
              type="date"
              {...register("dispachdate", { required: true })}
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Roll No"
            />
            {errors.dispachdate && (
              <p className="text-red-700">Dispatch date is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>PICKUP DATE</label>
            <input
              type="date"
              {...register("pickupdate", { required: true })}
              className="border border-gray-200 h-10 mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Password"
            />
            {errors.pickupdate && (
              <p className="text-red-700">Pickup date is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>DELIVER DATE</label>
            <input
              type="date"
              {...register("deliverdate", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.deliverdate && (
              <p className="text-red-700">Deliver date is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>SHIP VIA</label>
            <input
              type="text"
              {...register("shipvia", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.shipvia && (
              <p className="text-red-700">Ship via is required.</p>
            )}
          </div>

          {/* <div className="md:col-span-3 mb-3">
            <label>DEPARTMENT</label>
            <select
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-50"
              {...register("fruits")}
              onChange={(e) => {
                fruits.onChange(e); // Call react-hook-form's onChange
                console.log("BEFORE depart id is: ", e.target.value); // Your custom logic
                setDepartId(e.target.value);
                console.log("AFTER depart id is: ", departId); // Your custom logic
                getSupervisorData(e.target.value);
              }}
              onBlur={fruits.onBlur}
              ref={fruits.ref}
            >
              <option value={"SELECT DEPART"}>PLEASE SELECT</option>
              {allDepart.map((itm, ind) => {
                return (
                  <option key={ind} value={itm._id}>
                    {itm.ward_name}
                  </option>
                );
              })}
            </select>

            {errors.fruits && (
              <p className="text-red-700">Select a department.</p>
            )}
          </div> */}

          {/* <div className="md:col-span-3">
            <label>test 123</label>
            <select
              onChange={(e) => {
                fruits.onChange(e); // Call react-hook-form's onChange
                console.log("My custom onChange logic:", e.target.value); // Your custom logic
              }}
              onBlur={fruits.onBlur}
              ref={fruits.ref}
            >
              <option value="">Select a fruit</option>
              <option value="banana">Banana</option>
              <option value="kiwi">Kiwi</option>
            </select>

            {errors.supervisor && (
              <p className="text-red-700">Select a supervisor.</p>
            )}
          </div> */}

          {/* <div className="md:col-span-3">
            <label>SUPERVISOR</label>
            <select
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-50"
              {...register("supervisor")}
            >
              <option value={"SELECT supervisor"}>SELECT SUPERVISOR</option>
              {allSupervisor.map((itm, ind) => {
                return (
                  <option key={ind} value={itm._id}>
                    {itm.super_name}
                  </option>
                );
              })}

              
            </select>

            {errors.supervisor && (
              <p className="text-red-700">Select a supervisor.</p>
            )}
          </div> */}

          <div className="md:col-span-3">
            <label>TOTAL PAYMENT</label>
            <input
              type="number"
              {...register("payment", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.payment && (
              <p className="text-red-700">Payment is required.</p>
            )}
          </div>

          <div className="md:col-span-3 mb-3">
            <label>ON DELIVERY</label>
            <input
              type="number"
              {...register("ondelivery", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.ondelivery && (
              <p className="text-red-700">Delivery payment is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>MAKE</label>
            <input
              type="text"
              {...register("make", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.make && <p className="text-red-700">Make is required.</p>}
          </div>

          <div className="md:col-span-3">
            <label>MODEL</label>
            <input
              type="text"
              {...register("model", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.model && <p className="text-red-700">Model is required.</p>}
          </div>

          <div className="md:col-span-3 mb-3">
            <label>TYPING</label>
            <input
              type="text"
              {...register("typing", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.typing && (
              <p className="text-red-700">Typing is required.</p>
            )}
          </div>

          <div className="md:col-span-3 mb-3">
            <label>QUANTITY</label>
            <input
              type="number"
              {...register("quantity", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.quantity && (
              <p className="text-red-700">Quantity is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>PICKUP ADDRESS 1</label>
            <input
              type="text"
              {...register("picaddress1", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.picaddress1 && (
              <p className="text-red-700">Pickup address 1 is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>PICKUP ADDRESS 2</label>
            <input
              type="text"
              {...register("picaddress2", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.picaddress2 && (
              <p className="text-red-700">Pickup address 2 is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>PICKUP PHONE</label>
            <input
              type="text"
              {...register("picphone", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.picphone && (
              <p className="text-red-700">Pickup phone is required.</p>
            )}
          </div>

          <div className="md:col-span-3 mb-3">
            <label>DROP ADDRESS 1</label>
            <input
              type="text"
              {...register("dropaddress1", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.dropaddress1 && (
              <p className="text-red-700">Drop address 1 is required.</p>
            )}
          </div>

          <div className="md:col-span-3 mb-3">
            <label>DROP ADDRESS 2</label>
            <input
              type="text"
              {...register("dropaddress2", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.dropaddress2 && (
              <p className="text-red-700">Drop address 2 is required.</p>
            )}
          </div>

          <div className="md:col-span-3 mb-3">
            <label>DELIVERY PHONE</label>
            <input
              type="text"
              {...register("deliveryphone", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.deliveryphone && (
              <p className="text-red-700">Delivery phone is required.</p>
            )}
          </div>

          <div className="md:col-span-3 mb-3">
            <label>USHIP</label>
            <input
              type="text"
              {...register("uship", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.uship && <p className="text-red-700">Uship is required.</p>}
          </div>

          <div className="md:col-span-3">
            <label>WEIGHT</label>
            <input
              type="number"
              {...register("weight", { required: true })}
              className="border border-gray-200 h-10  mt-1 rounded px-4 w-full bg-gray-100"
              //   placeholder="Enter Address"
            />
            {errors.weight && (
              <p className="text-red-700">Weight is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <button
              // disabled={!pImage}
              className={
                // !pImage
                //   ? "bg-gray-200 text-slate-400 font-bold py-2 px-6 rounded"
                `bg-blue-500 mt-6 hover:bg-blue-600 text-white font-medium py-2 px-4 text-sm rounded`
              }
            >
              ADD VEHICAL
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
