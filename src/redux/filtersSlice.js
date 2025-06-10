import { createSlice } from '@reduxjs/toolkit';

const initialFilter = {
  name: '',
};

const slice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filter.name;
export const { changeFilter } = slice.actions;
export default slice.reducer;
