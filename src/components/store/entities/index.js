import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./formData";

export default combineReducers({
  formReducer: formReducer,
});
