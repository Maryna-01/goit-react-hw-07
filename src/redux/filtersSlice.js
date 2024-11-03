// redux/filtersSlice.js
import {
    createSlice
} from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: "", // текст пошуку
    },
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload; // оновлює текст фільтру при введенні користувачем
        },
    },
});

export const {
    changeFilter
} = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name; // селектор для доступу до стану фільтра

export default filtersSlice.reducer; // експорт редюсера