import { createSlice } from '@reduxjs/toolkit';

export const cryptoMetricsSlice = createSlice({
  name: 'cryptoMetrics',
  initialState: {
    loadingCryptoMetrics: false,
    cryptoMarketData: [],
    cryptoMarketAssetsIds: []
  },
  reducers: {
    setLoadingCryptoMetrics: (state, { payload }) => {
      state.loadingCryptoMetrics = payload;
    },
    setCryptoMarketData: (state, { payload }) => {
      state.cryptoMarketData = payload;
    },
    setCryptoMarketAssetsIds: (state, { payload }) => {
      state.cryptoMarketAssetsIds = payload;
    },
    updateCryptoMarketAssetData: (state, { payload }) => {
      const messageData = payload.split('\n');
      let respCryptoMarketData = [...state.cryptoMarketData];
      for (const message of messageData) {
        const [id, value1, _] = message.split(',');
        if (id && state.cryptoMarketAssetsIds.indexOf(id) >= 0) {
          respCryptoMarketData = respCryptoMarketData.map(assetData => {
            if (assetData.id === id) {
              return {
                ...assetData,
                priceUsd: Number(value1)
              }
            }
            return assetData;
          })
        }
      }
      state.cryptoMarketData = respCryptoMarketData;
    }
  },
});

export const {
  setLoadingCryptoMetrics,
  setCryptoMarketData,
  setCryptoMarketAssetsIds,
  updateCryptoMarketAssetData
} = cryptoMetricsSlice.actions;
