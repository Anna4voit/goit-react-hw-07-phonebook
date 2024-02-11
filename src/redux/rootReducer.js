import { combineReducers } from '@reduxjs/toolkit';

import filterReducer from './filter-slice';
import contactsBooksReducer from './contactsBooks-slice';

const rootReducer = combineReducers({
  contacts: contactsBooksReducer,
  filter: filterReducer,
});

export default rootReducer;
