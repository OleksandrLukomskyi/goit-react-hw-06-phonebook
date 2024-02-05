import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const sliceFilter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const filterReducer = sliceFilter.reducer;
export const { updateFilterAction } = sliceFilter.actions;
