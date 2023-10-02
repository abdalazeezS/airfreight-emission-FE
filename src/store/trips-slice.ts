import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITrip } from "../types";
import { sortArray } from "../utilities";

interface ITripsState {
  data: ITrip[];
}

const initialState: ITripsState = {
  data: [],
}

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    getTrips: (state) => {
      return state;
    },
    setTrips: (state, action) => {
      state.data = action.payload;
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