import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = value => {
    axios.defaults.headers.common.Authorization = value;
}

export const register = createAsyncThunk("auth/register", async (values) => {
    const response = await axios.post("/users/signup", values);
    setAuthHeader(`Bearer ${response.data.token}`);
    return response.data;
});

export const login = createAsyncThunk("auth/login", async (values) => {
    const response = await axios.post("/users/login", values);
    setAuthHeader(`Bearer ${response.data.token}`);
    return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
    await axios.post("/users/logout");

    axios.defaults.headers.common.Authorization = "";
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
    const reduxState = thunkApi.getState();
    setAuthHeader(`Bearer ${reduxState.auth.token}`);
    const response = await axios.get("/users/current");
    return response.data;
    },
    {
        condition: (_, thunkApi) => {
            const reduxState = thunkApi.getState();
            return reduxState.auth.token !== null;
        }
    }
);