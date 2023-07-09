import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    mobileOpen: false,
  },
  reducers: {
    setMobileOpen: (state, { payload }) => {
      state.mobileOpen = payload;
    },
  },
});

export const {
  setMobileOpen,
} = appSlice.actions;
