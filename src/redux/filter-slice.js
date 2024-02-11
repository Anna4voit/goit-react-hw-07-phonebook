import { createSlice } from '@reduxjs/toolkit';
import InitialState from './InitialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: InitialState.filter,
  reducers: {
    setFilter: (_, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
