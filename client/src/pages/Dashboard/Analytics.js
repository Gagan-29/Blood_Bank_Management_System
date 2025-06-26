import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";
import moment from "moment";

const Analytics = () => {
  const colors = [
    "#9ACBD0",
    "#A9B5DF",
    "#A7B49E",
    "#F7CFD8",
    "#F4F8D3",
    "#B3D8A8",
    "#DDEB9D",
    "#E07A5F",
  ];
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  //get blood group data
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //life cycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  //get recent inventories
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <>
      <Header />
      <div className="container d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card m-2 p-1"
            key={i}
            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
                {record.bloodGroup}
              </h1>
              <p className="card-text">
                Total In : <b>{record.totalIn} (ML)</b>
              </p>
              <p className="card-text">
                Total Out : <b>{record.totalOut} (ML)</b>
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Available Blood : <b>{record.availableBlood} (ML)</b>
            </div>
          </div>
        ))}
      </div>

      <div className="container my-3">
        <h1>Recent Blood Transactions</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory type</th>
              <th scope="col">Quantity</th>
              <th scope="col">(Donar/Receiver) email</th>
              <th scope="col">Time & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
