import { useDispatch, useSelector } from 'react-redux';
import {
  setLoadingCryptoMetrics,
  setCryptoMarketData,
  setCryptoMarketAssetsIds,
  updateCryptoMarketAssetData,
} from '@/store';
import { useAppApi, useNotificationMessages } from '@/hooks';

export const useCryptoMetricsStore = () => {
  const {
    loadingCryptoMetrics,
    cryptoMarketData,
    cryptoMarketAssetsIds,
  } = useSelector(state => state.cryptoMetrics);
  const dispatch = useDispatch();
  const appApi = useAppApi();
  const {
    showNotificationError,
  } = useNotificationMessages();

  const changeLoadingCryptoMetrics = (loadingValue) => {
    dispatch(setLoadingCryptoMetrics(loadingValue));
  };

  const clearCryptoMetrics = () => {
    dispatch(setCryptoMarketData([]));
  }

  const getCryptoMarketData = async () => {
    try {
      dispatch(setLoadingCryptoMetrics(true));
      const { data: apiResponse } = await appApi.get(
        '/v1/crypto-assets/markets');
      const cryptoMarketAssetsIds = apiResponse.data.map(asset => asset.id);
      dispatch(setCryptoMarketAssetsIds(cryptoMarketAssetsIds));
      dispatch(setCryptoMarketData(apiResponse.data));
    } catch (error) {
      await showNotificationError(error);
    } finally {
      dispatch(setLoadingCryptoMetrics(false));
    }
  };

  const handleSocketMarketMessage = (socketMessage) => {
    setTimeout(() => {
      dispatch(updateCryptoMarketAssetData(socketMessage));
    }, 200)
  }

  return {
    //* Properties
    loadingCryptoMetrics,
    cryptoMarketData,
    cryptoMarketAssetsIds,

    //* Methods
    changeLoadingCryptoMetrics,
    getCryptoMarketData,
    handleSocketMarketMessage,
    clearCryptoMetrics
  };
};
