import { configureStore } from "@reduxjs/toolkit";
import barSlice from "./bar";
import lineSlice from "./line";
import pieSlice from "./pie";

export const store = configureStore({
  reducer: {
    bar: barSlice,
    line: lineSlice,
    pie: pieSlice,
  },
});
