import { createSlice } from '@reduxjs/toolkit';
import { ISummary } from '../../models';
import { sumScoops, sumToppings, sumTotal } from '../../utils/summary.utils';

const initialState: ISummary = {
  scoops: {
    selected: [],
    price: 2,
    subtotal: 0,
  },
  toppings: {
    selected: [],
    price: 1.5,
    subtotal: 0,
  },
  total: 0,
};

export const summarySlice = createSlice({
  name: 'summary',
  initialState: initialState,
  reducers: {
    changeScoop: (state, action) => {
      const hasScoop = state.scoops.selected.find(scoop => scoop.scoopName === action.payload.scoopName);
      if (hasScoop) {
        if (action.payload.scoopQnty === 0) {
          let filteredSelected = state.scoops.selected.filter(scoop => scoop.scoopName !== action.payload.scoopName);
          let scoopsSubtotal = sumScoops(filteredSelected, state.scoops.price);
          return {
            ...state,
            scoops: {
              ...state.scoops,
              selected: filteredSelected,
              subtotal: scoopsSubtotal,
            },
            total: sumTotal(scoopsSubtotal, state.toppings.subtotal),
          };
        } else {
          const scoopIndex = state.scoops.selected.findIndex(scoop => scoop.scoopName === action.payload.scoopName);
          state.scoops.selected[scoopIndex].scoopQnty = action.payload.scoopQnty;
          state.scoops.subtotal = sumScoops(state.scoops.selected, state.scoops.price);
          state.total = sumTotal(state.scoops.subtotal, state.toppings.subtotal);
          return state;
        }
      }
      let newSelected = [...state.scoops.selected, action.payload];
      let scoopsSubtotal = sumScoops(newSelected, state.scoops.price);
      return {
        ...state,
        scoops: {
          ...state.scoops,
          selected: newSelected,
          subtotal: scoopsSubtotal,
        },
        total: sumTotal(scoopsSubtotal, state.toppings.subtotal),
      };
    },
    changeTopping: (state, action) => {
      const hasTopping = state.toppings.selected.find(topping => topping.toppingName === action.payload.toppingName);
      if (hasTopping) {
        let filteredSelected = state.toppings.selected.filter(topping => topping.toppingName !== action.payload.toppingName);
        let toppingsSubtotal = sumToppings(filteredSelected, state.toppings.price);
        return {
          ...state,
          toppings: {
            ...state.toppings,
            selected: filteredSelected,
            subtotal: toppingsSubtotal,
          },
          total: sumTotal(state.scoops.subtotal, toppingsSubtotal),
        };
      }
      let newSelected = [...state.toppings.selected, { toppingName: action.payload.toppingName }];
      let toppingsSubtotal = sumToppings(newSelected, state.toppings.price);
      return {
        ...state,
        toppings: {
          ...state.toppings,
          selected: newSelected,
          subtotal: toppingsSubtotal,
        },
        total: sumTotal(state.scoops.subtotal, toppingsSubtotal),
      };
    },
  },
});
