import { configureStore } from "@reduxjs/toolkit";
import plantsReducer from "./Components/PlantsSlice"

const store = configureStore({
    reducer: {
        plants: plantsReducer,
    }
});

export default store