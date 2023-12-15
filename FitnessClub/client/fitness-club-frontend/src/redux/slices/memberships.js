import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchMemberships = createAsyncThunk(
  "memberships/fetchMemberships",
  async () => {
    const { data } = await axios.get("/memberships");
    return data;
  }
);

export const fetchRemoveMembership = createAsyncThunk(
  "memberships/fetchRemoveMembership",
  async (id) => axios.delete(`/membership/${id}`)
);

const initialState = {
  memberships: {
    items: [],
    status: "loading",
  },
};

const membershipsSlice = createSlice({
  name: "memberships",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMemberships.pending]: (state) => {
      state.memberships.status = "loading";
    },
    [fetchMemberships.fulfilled]: (state, action) => {
      state.memberships.items = action.payload;
      state.memberships.status = "loaded";
    },
    [fetchMemberships.rejected]: (state) => {
      state.memberships.status = "error";
    },
    [fetchRemoveMembership.pending]: (state, action) => {
      state.memberships.items = state.memberships.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    },
  },
});

export const membershipsReducer = membershipsSlice.reducer;
