import { createSlice } from '@reduxjs/toolkit';

const seriesSlice = createSlice({
  name: 'series',
  initialState: { series: [] },
  reducers: {
    addSeries: (state, { payload }) => {
      state.series = payload.Search;
    },
  },
});

export const seriesActions = seriesSlice.actions;
export const seriesReducer = seriesSlice.reducer;
