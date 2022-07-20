import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    label: "",
    labels: [],
    data: [],
  },
};

export const barSlice = createSlice({
  name: "barChart",
  initialState,
  reducers: {
    bar_setLabel: (state, action) => {
      state.value.label = action.payload;
    },
    bar_setLabels: (state, action) => {
      state.value.labels = [...state.value.labels, action.payload];
    },
    bar_setData: (state, action) => {
      state.value.data = [...state.value.data, action.payload];
    },
    bar_clearAll: (state) => {
      state.value = {
        label: "",
        labels: [],
        data: [],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { bar_setLabel, bar_setLabels, bar_setData, bar_clearAll } =
  barSlice.actions;

export default barSlice.reducer;
