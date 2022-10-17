import { createSlice, current } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  userData: {},
  homepage: "form",
};

export const slice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updatedFormData: (formData, { payload }) => {
      formData.userData = payload;
    },
    updatedPage: (formData, { payload }) => {
      formData.homepage = payload.page;
    },
  },
});
export const setUserData = (value) => (dispatch) => {
  dispatch({
    type: updatedFormData.type,
    payload: value,
  });
};
export const setHomePage = (value) => (dispatch) => {
  dispatch({
    type: updatedPage.type,
    payload: value,
  });
};

// Action creators
const { updatedFormData, updatedPage } = slice.actions;

//selectors
export const getUserData = createSelector(
  (state) => state.entities.formReducer,
  (userData) => userData.userData
);
export const getHomePage = createSelector(
  (state) => state.entities.formReducer,
  (homepage) => homepage.homepage
);

export default slice.reducer;
