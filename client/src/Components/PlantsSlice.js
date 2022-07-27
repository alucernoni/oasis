import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPlants = 
    createAsyncThunk("plants/fetchPlants", () => {
        return fetch("/plants")
        .then(r=>r.json())
        .then((plants) => plants)
    })

const plantsSlice = createSlice({
    name: "plants",
    initialState: {
        entities: [],
        status: "idle"
    },
    reducers: {
        plantAdded(state, action) {
            state.entities.push(action.payload)
        },
        plantUpdated(state, action) {
            const plant = state.entities.find((plant) => plant.id === action.payload.id)
            plant = action.payload
        },
        plantDeleted(state, action) {
            const plant = state.entities.find((plant) => plant.id === action.payload.id)
            state.entities.filter((plant) => plant.id !== action.payload.id)
        }
    },
    extraReducers: {
        [fetchPlants.pending](state) {
            state.status = "loading"
        },
        [fetchPlants.fulfilled](state, action) {
            state.entities = action.payload
            state.status = "idle"
        }
    }
})

export const {plantAdded, plantUpdated, plantDeleted} = plantsSlice.actions
export default plantsSlice.reducer