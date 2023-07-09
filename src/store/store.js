import { configureStore } from '@reduxjs/toolkit';
import {
  appSlice,
  cryptoCalculatorSlice,
  cryptoMetricsSlice
} from './';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    cryptoCalculator: cryptoCalculatorSlice.reducer,
    cryptoMetrics: cryptoMetricsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
