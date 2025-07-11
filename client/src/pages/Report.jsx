import React from "react";

export default function Report() {
  return (
    <section className="w-3/4 border border-gray-300 mx-auto p-3">
      <div className="font-bold">REPORT AND LOGO</div>
      <p className="bg-gray-50 my-3 text-center border font-bold">
        GENERAL INFORMATION
      </p>
      <div className="flex border border-gray-100 justify-between">
        <p>Order ID:</p>
        <p>123</p>
        <p></p>
        <p>Current Status:</p>
        <p>Dispatch</p>
        <p></p>
        <p>CD Referrence # MC:</p>
        <p>1234567</p>
      </div>
      <div className="flex border border-gray-100 mt-2 justify-items-center">
        <p>Dispatch sheet assigned to: </p>
        <p></p>
        <p className="ml-2">Dispatch sheet assigned to</p>
      </div>
      <p className="bg-gray-50 my-3 text-center border font-bold">
        CARRIER INFORMATION
      </p>
      <table className="table-auto w-2/3 mx-auto">
        <thead className="">
          <tr className="border border-gray-300 bg-gray-50">
            <th>Carrier Name & Address</th>
            <th>Contact & DOT</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-300">
            <td>Malcolm Lockyer</td>
            <td>Dot Number: </td>
          </tr>
          <tr className="bg-gray-50 border border-gray-300">
            <td>Witchy Woman</td>
            <td>Driver Name</td>
          </tr>
          <tr className="border border-gray-300">
            <td>Shining Star</td>
            <td>Driver Phone</td>
          </tr>
        </tbody>
      </table>
      <p className="bg-gray-50 my-3 border text-center font-bold">
        ORDER INFORMATION
      </p>
      <table className="table-auto w-full">
        <thead className="">
          <tr className="border border-gray-300 bg-gray-50">
            <th>Order ID</th>
            <th>Delivery Estimated</th>
            <th>Ship Via</th>
            <th>Dispatch Date</th>
            <th>Pickup Exactly</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-300">
            <td>Malcolm Lockyer</td>
            <td>Dot Number: </td>
            <td>Dot Number: </td>
            <td>Dot Number: </td>
            <td>Dot Number: </td>
          </tr>
        </tbody>
      </table>
      <p className="mt-2">Condition:</p>
      <div className="flex my-2 font-bold justify-between w-4/5">
        <p>Total payment carrier:</p>
        <p>$. 123</p>
        <p></p>
        <p></p>
        <p>On Deliver Carrier</p>
        <p>$. 123</p>
        <p>{"(Zelle/CashApp/Venmo)"}</p>
      </div>
      <p>*Cash/Certified Funds through Zelle/CashApp/Venmo at Delivery</p>
      <p>
        **The company (Broker, Dealer, Auction, etc.) that originated this
        dispatch sheet
      </p>
      {/* <div className="flex w-96 bg-amber-100 justify-between"></div> */}
      {/* <div className="flex">
        <p>1</p>
        <p>2</p>
      </div>

      

      <div className="flex">
        <p>Delivery Estimated:</p>
        <p>Date</p>
      </div>
      <div className="flex">
        <p>Ship Via:</p>
        <p>Open</p>
      </div> */}
      <table className="table-auto w-full mt-2">
        <thead className="border bg-gray-50">
          <tr>
            <th>AGENT INFORMATION</th>
            <th>CONTACT INFORMATION</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td>Freight Officials LLC</td>
            <td>Contact: Fred Chase</td>
          </tr>
          <tr className="bg-gray-50 border border-gray-300">
            <td>17006 DRIVER LN</td>
            <td>Phone: 281-857-6822</td>
          </tr>
          <tr>
            <td>SUGAR LAND, TX 77498</td>
            <td>Earth, Wind, and Fire</td>
          </tr>
          <tr className="bg-gray-50 border border-gray-300">
            <td>Main Phone: 281-857-6823</td>
            <td>ICCMC: 1291722</td>
          </tr>
        </tbody>
      </table>
      <p className="font-bold border my-3 text-center bg-gray-50">
        {"VEHICLE INFORMATION: VEHICLE(S):"}
      </p>
      <table className="table-auto w-full">
        <thead className="border border-gray-200 bg-gray-50">
          <tr>
            <th>YEAR</th>
            <th>MAKE</th>
            <th>MODEL</th>
            <th>TYPE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-200">
            <td className="text-center">2025</td>
            <td className="text-center">Fred Chase</td>
            <td className="text-center">Model #</td>
            <td className="text-center">Box</td>
            <td className="text-center">1</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full mt-4">
        <thead className="border bg-gray-50">
          <tr>
            <th>PICKUP INFORMATION</th>
            <th className="">DELIVERY INFORMATION</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td>Freight Officials LLC</td>
            <td>Contact: Fred Chase</td>
          </tr>
          <tr>
            <td>17006 DRIVER LN</td>
            <td>Phone: 281-857-6822</td>
          </tr>
          <tr>
            <td>Phone: 17006 DRIVER LN</td>
            <td>Phone: 281-857-6822</td>
          </tr>
        </tbody>
      </table>
      <p className="font-bold bg-gray-50 border text-center">
        DISPATCH INSTRUCTIONS
      </p>
      <div className="flex justify-between">
        <p>Pick up exactly on:</p>
        <p>Date</p>
        <p></p>
        <p>Deliver within a day of:</p>
        <p>Date</p>
      </div>
      <p className="font-bold bg-gray-50 border mt-4 text-center mb-2">
        ADDITIONAL TERMS
      </p>
      <p className="mb-2">
        &raquo; Must give the customer at least 2 hours notice for pickup and
        delivery
      </p>
      <p className="mb-2">
        &raquo; Must do a thorough inspection of the vehicle on pickup and at
        delivery
      </p>
      <p className="mb-2">
        &raquo; Load pictures need to be sent over to dispatcher after the
        pickup and BOL receiving of delivery.
      </p>
      <p className="mb-2">
        &raquo; Freight Official needs to review and approve CO, W9, and carrier
        authority
      </p>
      <p className="font-bold">
        Authority to transport this vehicle is hereby assigned to ______. By
        accepting this agreement ______ certifies that it has the proper legal
        authority and insurance to carry the above described vehicle, only on
        trucks owned by ______. All invoices must be accompanied by a signed
        delivery receipt and email to Freight Officials. The above agreed upon
        price includes any and all surcharges unless otherwise agreed to by both
        ______ and Freight Officials.
      </p>
      <p className="font-bold">
        The agreement between ______ and Freight Officials, as described in this
        dispatch sheet, is solely between ______ and Freight Officials.
      </p>
      <p className="font-bold">
        Attention: Before you proceed with signing the RC please note that if
        any damage breakage or issues occur with the trailer of the driver
        transporting the shipment the company Freight Officials will not be
        liable for any costs until the shipment arrives at its final delivery
        location. Your understanding of this policy is appreciated.
      </p>
      <p>Please sign and send back.</p>
      <p>Carrier Signature:</p>
      <p>Date ___________</p>
    </section>
  );
}
