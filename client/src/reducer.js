import { combineReducers } from "redux";
import plantsReducer from "./Components/PlantsSlice"

const rootReducer = combineReducers({
    plants: plantsReducer,
})

export default rootReducer