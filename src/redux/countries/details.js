// Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API
const searchAPI = 'https://restcountries.com/v3.1/name';

// Actions
const FETCH_DETAILS = 'FETCH_DETAILS';

// Action Creator Thunk
export const fetchDetails = createAsyncThunk(FETCH_DETAILS, async (name, { dispatch }) => {
  const response = await fetch(`${searchAPI}/${name}`);
  const data = await response.json();
  const countries = Object.keys(data).map((key) => {
    const country = data[key];
    return {
      id: key,
      ...country,
    };
  });
  dispatch({
    type: FETCH_DETAILS,
    payload: countries,
  });
  return countries;
});

// Initial State
const initialState = {
  countryDetails: [],
};

// Slice Reducer
const detailSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDetails.fulfilled]: (state, action) => ({
      ...state,
      countryDetails: action.payload,
    }),
  },
});

export default detailSlice.reducer;
