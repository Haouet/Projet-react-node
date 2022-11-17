import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/CardSlice";

const store = configureStore({
  reducer: {
    Card: cardReducer,
    
  },
});

export default store;
