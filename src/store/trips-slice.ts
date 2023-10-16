import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGetTripsResponse } from "../types";
import { sortArray } from "../utilities";

const initialState: IGetTripsResponse = {
  data: [],
  pageSize: 0,
  totalRecords: 0
}

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    getTrips: (state) => {
      return state;
    },
    setTrips: (state, action) => {
      const { data, pageSize, totalRecords } = action.payload ?? {};
      state.data = data;
      state.pageSize = pageSize;
      state.totalRecords = totalRecords;
    },
    sortTrips: (state, action: PayloadAction<{ field: string, type: string }>) => {
      const field = action.payload.field;
      const type = action.payload.type;
      sortArray(state.data, field, type);
    }
  }
});

export const { getTrips, setTrips, sortTrips } = tripsSlice.actions;
export default tripsSlice.reducer;