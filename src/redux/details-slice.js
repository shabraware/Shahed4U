import { createSlice } from '@reduxjs/toolkit';

const detailsSlice = createSlice({
  name: 'details',
  initialState: { details: {} },
  reducers: {
    addDetails: (state, { payload }) => {
      state.details = payload;
    },
  },
});

export const detailsActions = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
