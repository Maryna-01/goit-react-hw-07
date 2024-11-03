import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL = "https://672670ed302d03037e6d8948.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Запит для додавання нового контакту
export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post(BASE_URL, contact);
            return response.data; // Повертаємо доданий контакт
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); // Відправляємо повідомлення про помилку
        }
    }
);

// Запит для видалення контакту за його ID
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            return id; // Повертаємо ID видаленого контакту
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); // Відправляємо повідомлення про помилку
        }
    }
);