import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  isAuthenticated: false,
  sessionId: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem("session_is");

      localStorage.setItem("account_id", action.payload.id);
    },
    setSessionId: (state, action) => {
      state.sessionId = action.payload;
    },
    logout: (state) => {
      state.user = "";
      state.isAuthenticated = false;
      state.sessionId = "";
    },
  },
});

export const { setUser, setSessionId, logout } = authSlice.actions;
export default authSlice.reducer;
export const userSelector = (state) => state.user;
