import { createSlice } from '@reduxjs/toolkit';

export const cryptoCalculatorSlice = createSlice({
  name: 'cryptoCalculator',
  initialState: {
    loadingCryptoCalculator: false,
    cryptoAssets: [],
    calculatorResult: null,
  },
  reducers: {
    setLoadingCryptoCalculator: (state, { payload }) => {
      state.loadingCryptoCalculator = payload;
    },
    setCryptoAssetsData: (state, { payload }) => {
      state.cryptoAssets = payload;
    },
    setCalculatorResult: (state, { payload }) => {
      state.calculatorResult = payload;
    },
  },
});

export const {
  setLoadingCryptoCalculator,
  setCryptoAssetsData,
  setCalculatorResult,
} = cryptoCalculatorSlice.actions;
