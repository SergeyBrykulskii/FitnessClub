import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
  const { data } = await axios.post("/auth/login", params);
  return data;
});

export const fetchRegistration = createAsyncThunk(
  "auth/fetchRegistration",
  async (params) => {
    const { data } = await axios.post("auth/registration", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const userUnfo = await axios.get("/auth/me");
  return userUnfo.data;
});

const initialState = {
  data: null,
  userInfo: null,
  userInfoStatus: "loading",
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchAuth.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchRegistration.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchRegistration.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchRegistration.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuthMe.pending]: (state) => {
      state.userInfoStatus = "loading";
      state.userInfo = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.userInfoStatus = "loaded";
      state.userInfo = action.payload;
    },
    [fetchAuthMe.rejected]: (state) => {
      state.userInfoStatus = "error";
      state.userInfo = null;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);
export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
