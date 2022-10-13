import { createSlice, current } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as action from "../api";

const initialState = {
  listingItems: [],

};

export const slice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    testDetailsReceive: (home, { payload }) => {

      home.loading = false;
    },
    testsRequested: (home, { payload }) => {
      home.loading = true;
    },
    testsRequestFailed: (home, { payload }) => {
      home.loading = false;
    },


  },
});
export const searchItem = (value) => (dispatch) => {
  dispatch({
    type: searchItemInList.type,
    payload: value,
  });
};

// Action creators
const { testDetailsReceive, testsRequested, testsRequestFailed, addToCart, decreaseCount, increaseCount, updatePage, filter, deleteItem, searchItemInList, filterSec } = slice.actions;

export const loadItems = () => (dispatch, getState) => {
  return dispatch(
    action.apiCallBegan({
      url: `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`,
      onStart: testsRequested.type,
      onError: testsRequestFailed.type,
      onSuccess: testDetailsReceive.type,
    })
  );
};

//selectors
export const getFilteredGender = createSelector(
  (state) => state.entities.home,
  (filteredGender) => filteredGender?.filteredGender
);

export const getFilteredTypes = createSelector(
  (state) => state.entities.home,
  (filteredTypes) => filteredTypes?.filteredTypes
);



export default slice.reducer;
