import React from "react";
import { getParams } from "../../helpers/getParams";
import  "./dashboard.css";

function DashBoard() {
  const { name, age, email, phoneNumber } = getParams();

  return (
    <div>
        <div className="heading">Welcome : <p>{name}</p></div>
      <div className="fields">Age : {age}</div>
      <div className="fields">Email : {email}</div>
      <div className="fields">Phone Number : {phoneNumber}</div>
    </div>
  );
}

export default DashBoard;
