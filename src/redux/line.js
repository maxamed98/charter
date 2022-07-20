import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    label: "",
    labels: [],
    data: [],
  },
};

export const lineSlice = createSlice({
  name: "lineChart",
  initialState,
  reducers: {
    line_setLabel: (state, action) => {
      state.value.label = action.payload;
    },
    line_setLabels: (state, action) => {
      state.value.labels = [...state.value.labels, action.payload];
    },
    line_setData: (state, action) => {
      state.value.data = [...state.value.data, action.payload];
    },
    line_clearAll: (state) => {
      state.value = { label: "", labels: [], data: [] };
    },
  },
});

// Action creators are generated for each case reducer function
export const { line_setLabel, line_setLabels, line_setData, line_clearAll } =
  lineSlice.actions;

export default lineSlice.reducer;
