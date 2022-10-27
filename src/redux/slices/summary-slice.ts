import { createSlice } from '@reduxjs/toolkit';
import { ISummary } from '../../models';

const initialState: ISummary = {
  scoops: [],
  toppings: [],
};

export const summarySlice = createSlice({
  name: 'summary',
  initialState: initialState,
  reducers: {
    changeScoop: (state, action) => {
      const hasScoop = state.scoops.find(scoop => scoop.scoopName === action.payload.scoopName);
      if (hasScoop) {
        if (action.payload.scoopQnty === 0) {
          return {
            ...state,
            scoops: state.scoops.filter(scoop => scoop.scoopName !== action.payload.scoopName),
          };
        } else {
          const scoopIndex = state.scoops.findIndex(scoop => scoop.scoopName === action.payload.scoopName);
          state.scoops[scoopIndex].scoopQnty = action.payload.scoopQnty;
          return state;
        }
      }
      return {
        ...state,
        scoops: [...state.scoops, action.payload],
      };
    },
    changeTopping: (state, action) => {},
  },
});
