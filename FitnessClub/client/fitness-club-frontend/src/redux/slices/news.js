import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const { data } = await axios.get('/news');
    return data;
});

const initialState = {
    news: {
        items: [],
        status: "loading",
    },
};

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchNews.pending]: (state) => {
            state.news.status = "loading";
        },
        [fetchNews.fulfilled]: (state, action) => {
            state.news.items = action.payload;
            state.news.status = "loaded";
        },
        [fetchNews.rejected]: (state) => {
            state.news.status = "error";
        },
    },

});

export const newsReducer = newsSlice.reducer;