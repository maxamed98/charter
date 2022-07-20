import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    label: "",
    labels: [],
    data: [],
  },
};

export const pieSlice = createSlice({
  name: "pieChart",
  initialState,
  reducers: {
    pie_setLabel: (state, action) => {
      state.value.label = action.payload;
    },
    pie_setLabels: (state, action) => {
      state.value.labels = [...state.value.labels, action.payload];
    },
    pie_setData: (state, action) => {
      state.value.data = [...state.value.data, action.payload];
    },
    pie_clearAll: (state) => {
      state.value = { label: "", labels: [], data: [] };
    },
  },
});

// Action creators are generated for each case reducer function
export const { pie_setLabel, pie_setLabels, pie_setData, pie_clearAll } =
  pieSlice.actions;

export default pieSlice.reducer;
