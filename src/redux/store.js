import {
    configureStore
} from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice"; // Імпорт редюсера фільтра

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer, // Додаємо filtersReducer у store
    },
});

export default store;