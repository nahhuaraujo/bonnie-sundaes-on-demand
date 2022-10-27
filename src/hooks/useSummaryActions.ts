import { summarySlice } from '../redux/slices';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const useSummaryActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(summarySlice.actions, dispatch);
};
