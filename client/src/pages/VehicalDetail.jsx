import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import dayjs from "dayjs";

export default function FCPSDetail() {
  const [allVehical, setAllVehical] = useState({});
  let navigate = useNavigate();
  let { id } = useParams();

  // console.log("id is: ", id);
  // let path = `http://localhost:3001/vehical/${id}`;
  // console.log("path", path);

  async function getData() {
    try {
      const res = await axios(`http://localhost:3001/vehical/${id}`);
      const data = await res.data;
      console.log("SINGLE DATA: ", data);
      setAllVehical(data);
    } catch (err) {
      console.log("Error occured from getdata method: ", err);
    }
  }

  useEffect(() => {
    getData();
    // console.log("SNAME: ", allStudent[0]["sname"]);
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-3xl font-semibold text-slate-800 text-center mt-10">
        Vehical Order #{" "}
        <span className="text-blue-500">{allVehical.orderno}</span>
      </div>
      <div className="text-sm font-semibold text-slate-500 text-center mt-2">
        Complete Vehical Detail Information
      </div>

      <div className="w-4/5 mx-auto mb-3 flex justify-end">
        <button
          type="button"
          className="bg-blue-500 text-white rounded-md text-sm font-semibold px-4 py-2"
        >
          Go Back
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-2xl mx-auto w-4/5 p-8 transition-all duration-300 animate-fade-in">
        <div className="w-full md:pl-8">
          {/* start */}
          <table className="text-slate-800 w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 font-medium text-sm text-gray-500 text-left pl-4 uppercase">
                  MC NO
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-500 text-left uppercase"
                >
                  Carrier Information
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-500 text-left uppercase dark:text-neutral-500"
                >
                  Carrier Address 1
                </th>

                <th
                  scope="col"
                  className="text-sm font-medium text-gray-500 text-left uppercase"
                >
                  Carrier Address 2
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-100">
                <td className="text-slate-500 pl-4 py-2 text-sm">
                  {allVehical.mcno}
                </td>

                <td className="text-slate-500 text-sm">
                  {allVehical.carrierInfo}
                </td>

                <td className="text-slate-500 text-sm">
                  {allVehical.carAddress1}
                </td>
                <td className="text-slate-500 text-sm">
                  {allVehical.carAddress2}
                </td>
              </tr>

              <tr className="border border-gray-100 bg-gray-100">
                <td className="text-slate-500 text-left pl-4 py-2 text-sm font-medium">
                  DOT NO
                </td>

                <td className="text-slate-500 text-sm font-medium">
                  DRIVER NAME
                </td>

                <td className="text-slate-500 text-sm font-medium">
                  DRIVER PHONE
                </td>
                <td className="text-slate-500 text-sm font-medium">
                  DRIVER EMAIL
                </td>
              </tr>

              <tr className="border border-gray-100 mt-10">
                <td className="text-slate-500 pl-4 py-2 text-sm">
                  {allVehical.dotno}
                </td>
                <td className="text-slate-500 text-sm">
                  {allVehical.drivername}
                </td>
                <td className="text-slate-500 text-sm">
                  {allVehical.driverphone}
                </td>
                <td className="text-slate-500 text-sm">
                  {allVehical.driveremail}
                </td>
              </tr>

              <tr className="border border-gray-100 bg-gray-100">
                <td className="text-slate-500 text-left pl-4 py-2 text-sm font-medium">
                  DISPATCH DATE
                </td>

                <td className="text-slate-500 text-left text-sm font-medium">
                  PICKUP DATE
                </td>

                <td className="text-slate-500 text-left text-sm font-medium">
                  DELIVER DATE
                </td>
                <td className="text-slate-500 text-left text-sm font-medium">
                  SHIP VIA
                </td>
              </tr>

              <tr className="border border-gray-100 mt-10">
                <td className="text-slate-500 pl-4 py-2 text-sm">
                  {dayjs(allVehical.dispachDate).format("DD-MMM-YYYY")}
                </td>

                <td className="text-slate-500 text-sm">
                  {dayjs(allVehical.pickupDate).format("DD-MMM-YYYY")}
                </td>

                <td className="text-slate-500 text-sm">
                  {dayjs(allVehical.deliverDate).format("DD-MMM-YYYY")}
                </td>

                <td className="text-slate-500 text-sm">{allVehical.shipvia}</td>
              </tr>

              <tr className="border border-gray-100 bg-gray-100">
                <td className="text-slate-500 text-left pl-4 py-2 text-sm font-medium">
                  PAYMENT
                </td>

                <td className="text-slate-500 text-sm font-medium">
                  ON DELIVERY
                </td>

                <td className="text-slate-500 text-sm font-medium">YEAR</td>
                <td className="text-slate-500 text-sm font-medium">MAKE</td>
              </tr>

              <tr className="border border-gray-100 mt-10">
                <td className="text-slate-500 pl-4 py-2 text-sm">
                  {allVehical.totalPayment}
                </td>
                <td className="text-slate-500 text-sm">
                  {allVehical.onDelivery}
                </td>
                <td className="text-slate-500 text-sm">{allVehical.year}</td>
                <td className="text-slate-500 text-sm">{allVehical.make}</td>
              </tr>

              <tr className="border border-gray-100 bg-gray-100">
                <td className="text-slate-500 text-left pl-4 py-2 text-sm font-medium">
                  MODEL
                </td>

                <td className="text-slate-500 text-sm font-medium">TYPE</td>

                <td className="text-slate-500 text-sm font-medium">QUANTITY</td>
                <td className="text-slate-500 text-sm font-medium">
                  PICKUP ADDRESS 1
                </td>
              </tr>

              <tr className="border border-gray-100 mt-10">
                <td className="text-slate-500 pl-4 py-2 text-sm">
                  {allVehical.model}
                </td>
                <td className="text-slate-500 text-sm">{allVehical.typing}</td>
                <td className="text-slate-500 text-sm">
                  {allVehical.quantity}
                </td>
                <td className="text-slate-500 text-sm">
                  {allVehical.pickupAddress1}
                </td>
              </tr>

              <tr className="border border-gray-100 bg-gray-100">
                <td className="text-slate-500 text-left pl-4 py-2 text-sm font-medium">
                  PICKUP ADDRESS 2
                </td>

                <td className="text-slate-500 text-sm font-medium">
                  PICKUP PHONE
                </td>

                <td className="text-slate-500 text-sm font-medium">
                  DROP OF ADDRESS 1
                </td>
                <td className="text-slate-500 text-sm font-medium">
                  DROP OF ADDRESS 2
                </td>
              </tr>

              <tr className="border border-gray-100 mt-10">
                <td className="text-slate-500 pl-4 py-2 text-sm">
                  {allVehical.pickupAddress2}
                </td>
                <td className="text-slate-500 text-sm">
                  {allVehical.pickupPhone}
                </td>
                <td className="text-slate-500 text-sm">
                  {allVehical.dropofAddress1}
                </td>
                <td className="text-slate-500 text-sm">
                  {allVehical.dropofAddress2}
                </td>
              </tr>

              <tr className="border border-gray-100 bg-gray-100">
                <td className="text-slate-500 text-left pl-4 py-2 text-sm font-medium">
                  DELIVERY PHONE
                </td>

                <td className="text-slate-500 text-sm font-medium">USHIP</td>

                <td className="text-slate-500 text-sm font-medium">WEIGHT</td>
                <td className="text-slate-500 text-sm font-medium">PRESENT</td>
              </tr>

              <tr className="border border-gray-100 mt-10">
                <td className="text-slate-500 pl-4 p-2 text-sm">
                  {allVehical.deliveryPhone}
                </td>
                <td className="text-slate-500 text-sm">{allVehical.uship}</td>
                <td className="text-slate-500 text-sm">
                  {allVehical.weight} {"LBS"}
                </td>
                <td className="text-slate-500 text-sm">
                  {allVehical.ispresent}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10"></div>
    </>
  );
}
