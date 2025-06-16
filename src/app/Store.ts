import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "../features/pets/petsSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    pets: petsReducer,
    categories: categoriesReducer,
  },
});

// Infer types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;