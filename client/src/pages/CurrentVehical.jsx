import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import dayjs from "dayjs";
import jsPDF from "jspdf";
// import "jspdf-autotable";
import { autoTable } from "jspdf-autotable";
import { BiSolidCommentDetail } from "react-icons/bi";
import { Link, useNavigate } from "react-router";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";

export default function CurrentFCPS() {
  const [allVehical, setAllVehical] = useState([]);
  const [filter, setFilter] = useState("");

  let navigate = useNavigate();

  async function getData() {
    try {
      const res = await axios("http://localhost:3001/vehical");
      const data = await res.data;
      console.log("GET DATA: ", data);
      setAllVehical(data);
    } catch (err) {
      console.log("Error occured from getdata method: ", err);
    }
  }

  // =============== SEARCH CODE ===============
  const lowercasedFilter = filter.toLowerCase();

  const filteredData = allVehical.filter((item) => {
    if (
      item["orderno"] &&
      item["orderno"].toLowerCase().includes(lowercasedFilter)
      // (item["fname"] &&
      //   item["fname"].toLowerCase().includes(lowercasedFilter)) ||
      // (item["batch"] &&
      //   item["batch"].toLowerCase().includes(lowercasedFilter)) ||
      // (item["rollno"] &&
      //   item["rollno"].toLowerCase().includes(lowercasedFilter))
    ) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    getData();
  }, []);

  // const getPDF = () => {
  //   console.log("pdf");

  //   const doc = new jsPDF({
  //     orientation: "landscape",
  //   });
  //   var totalPagesExp = "{total_pages_count_string}";

  //   autoTable(doc, {
  //     html: "#my-table",
  //     styles: { fontSize: 8 },
  //     margin: { top: 22, left: 10, right: 10 },
  //     didDrawPage: function (data) {
  //       // Header
  //       doc.setFontSize(20);
  //       doc.setTextColor(40);
  //       doc.text(10, 10, "School of Postgraduate Studies - DUHS");
  //       doc.setFontSize(15);
  //       doc.text(10, 18, "FCPS-II Current Trainees Report");

  //       doc.setFontSize(9);
  //       let dt = new Date();
  //       doc.text(
  //         260,
  //         18,
  //         "Print: " +
  //           dt.getDate() +
  //           "-" +
  //           (dt.getMonth() + 1) +
  //           "-" +
  //           dt.getFullYear()
  //       );

  //       // Footer
  //       var str = "Page " + doc.internal.getNumberOfPages();
  //       // Total page number plugin only available in jspdf v1.0+
  //       if (typeof doc.putTotalPages === "function") {
  //         str = str + " of " + totalPagesExp;
  //       }
  //       doc.setFontSize(10);
  //       var pageSize = doc.internal.pageSize;
  //       var pageHeight = pageSize.height
  //         ? pageSize.height
  //         : pageSize.getHeight();
  //       doc.text(str, data.settings.margin.left, pageHeight - 10);
  //     },
  //   });

  //   // Total page number plugin only available in jspdf v1.0+
  //   if (typeof doc.putTotalPages === "function") {
  //     doc.putTotalPages(totalPagesExp);
  //   }
  //   doc.save("all_student_report.pdf");

  //   // ----------------- End PDF -------------------
  // };

  return (
    <>
      <Navbar />

      <h2 className="text-3xl text-center font-bold text-slate-700 mt-9 mb-2">
        All Vehical Record
      </h2>
      <h2 className="text-sm text-center font-medium mb-9 text-slate-600">
        Vehical Details Information
      </h2>

      <div className="flex justify-center">
        <div>
          <input
            type="text"
            value={filter}
            placeholder="Search any..."
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            className="border w-80 border-gray-400 h-9 rounded px-3 bg-gray-50"
          />
        </div>

        {/* <button
          type="button"
          onClick={getPDF}
          className="bg-white text-sm font-normal duration-300 text-slate-800 hover:text-white hover:bg-slate-700 border border-slate-800 rounded-md ml-3 py-0 px-3"
        >
          Get Print
        </button> */}

        <div className="inline-flex hover:bg-blue-600 hover:scale-105 items-center h-9 ml-2 text-white bg-blue-500 rounded">
          <button
            type="button"
            // onClick={getPDF}
            className="px-5 py-1.5 text-sm font-medium flex"
          >
            <AiFillFilePdf size={"18px"} />
            &nbsp;Print
          </button>
        </div>

        {/* bg-gradient-to-r from-slate-900 to-slate-700 */}

        <div className="inline-flex hover:bg-blue-600 hover:cursor-pointer hover:scale-105 items-center h-9 ml-2 text-white bg-blue-500 rounded">
          <button
            type="button"
            onClick={() => {
              navigate("/addvehical");
            }}
            className="px-5 py-1.5 flex text-sm font-medium"
          >
            <FaUser size={"18px"} />
            &nbsp; Add Vehical
          </button>
        </div>
      </div>

      <section>
        <div className="rounded-lg mx-5 mt-5 overflow-hidden shadow-lg">
          <table
            id="my-table"
            className="w-full text-sm text-left rtl:text-right text-gray-500"
          >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-slate-900 rounded-lg text-white">
                <th scope="col" className="pl-5 w-10 py-3">
                  S #
                </th>

                <th scope="col" className="pl-5 py-3">
                  ORDER NO
                </th>
                <th scope="col" className="pl-5 py-3">
                  MC NO
                </th>

                <th scope="col" className="pl-5 py-3">
                  CARRIER INFO
                </th>

                <th scope="col" className="pr-5 py-3">
                  DRIVER NAME
                </th>

                <th scope="col" className="pr-5 py-3">
                  DRIVER PHONE
                </th>

                <th scope="col" className="pr-5 w-24 py-3">
                  PAYMENT
                </th>

                <th scope="col" className="py-3 pr-10">
                  CREATED
                </th>

                <th scope="col" className="py-3 pr-10">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {console.log("filter: ", filteredData)}

              {filteredData &&
                filteredData.map((veh, ind) => {
                  return (
                    <tr
                      key={ind}
                      className="bg-white hover:bg-gray-100 odd:bg-white even:bg-gray-50"
                    >
                      <td className="pl-3 text-center py-3">{ind + 1}</td>

                      <td className="pl-3 font-medium text-gray-900">
                        {/* {prod.productname.substring(0, 35)}... */}
                        {veh.orderno}
                      </td>

                      <td className="pl-3 text-gray-900">
                        {/* {prod.productname.substring(0, 35)}... */}
                        {veh.mcno}
                      </td>
                      <td className="mr-3 py-3">{veh.carrierInfo}</td>
                      <td className="mr-3 py-3">{veh.drivername}</td>

                      <td className="pl-3 text-gray-500">
                        {veh.driverphone}
                        {/* {dayjs(veh.doj).format("DD-MMM-YYYY")} */}
                      </td>

                      <td className="mr-3 py-3">{veh.totalPayment}</td>

                      <td className="py-3">
                        {dayjs(veh.createdAt).format("DD-MMM-YYYY")}
                      </td>
                      <td className="flex py-3">
                        <Link to={`/detail/${veh._id}`}>
                          <BiSolidCommentDetail />
                        </Link>
                        <Link className="ml-2" to={`/report/${veh._id}`}>
                          <BiSolidCommentDetail />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
