import { configureStore } from '@reduxjs/toolkit';
import { ISummary } from '../models';
import { summarySlice } from './slices';

export interface AppStore {
  summary: ISummary;
}

export default configureStore<AppStore>({
  reducer: {
    summary: summarySlice.reducer,
  },
});
