import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParams } from "../../helpers/getParams";
import {
  getHomePage,
  getUserData,
  setHomePage,
} from "../store/entities/formData";
import "./dashboard.css";

function DashBoard() {
  //   const { name, age, email, phoneNumber } = getParams();
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();
  const page = useSelector(getHomePage);

  const showBackArrow = () => {
    return (
      <div
        onClick={() => dispatch(setHomePage({ page: "form" }))}
        className="back-container"
      >
        <img className="back-arrow" src="backArrow.png" alt={"back"} />
        <div> go back</div>
      </div>
    );
  };
  return (
    <div>
      <div>{showBackArrow()}</div>
      <div className="heading">
        Welcome <p>{userData.name}</p>
      </div>
      <div className="fields">Age : {userData.age}</div>
      <div className="fields">Email : {userData.email}</div>
      <div className="fields">Phone Number : {userData.phoneNumber}</div>
    </div>
  );
}

export default DashBoard;
