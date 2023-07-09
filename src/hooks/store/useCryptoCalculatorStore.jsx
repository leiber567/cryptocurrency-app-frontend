import { useDispatch, useSelector } from 'react-redux';
import {
  setLoadingCryptoCalculator,
  setCryptoAssetsData, setCalculatorResult,
} from '@/store';
import { useAppApi, useNotificationMessages } from '@/hooks';

export const useCryptoCalculatorStore = () => {
  const {
    loadingCryptoCalculator,
    cryptoAssets,
    calculatorResult,
  } = useSelector(state => state.cryptoCalculator);
  const dispatch = useDispatch();
  const appApi = useAppApi();
  const {
    showNotificationError,
  } = useNotificationMessages();

  const changeLoadingCryptoCalculator = (loadingValue) => {
    dispatch(setLoadingCryptoCalculator(loadingValue));
  };

  const clearCryptoCalculator = () => {
    dispatch(setCalculatorResult(null));
  }

  const getCryptoAssets = async () => {
    try {
      dispatch(setLoadingCryptoCalculator(true));
      const { data: apiResponse } = await appApi.get('/v1/crypto-assets');
      dispatch(setCryptoAssetsData(apiResponse.data));
    } catch (error) {
      await showNotificationError(error);
    } finally {
      dispatch(setLoadingCryptoCalculator(false));
    }
  };

  const getEarningsCryptocurrency = async (usdValue) => {
    try {
      dispatch(setLoadingCryptoCalculator(true));
      const { data: apiResponse } = await appApi.post(
        '/v1/earnings/cryptocurrency',
        { usdValue }
      );
      dispatch(setCalculatorResult(apiResponse.data));
    } catch (error) {
      await showNotificationError(error);
    } finally {
      dispatch(setLoadingCryptoCalculator(false));
    }
  };

  return {
    //* Properties
    loadingCryptoCalculator,
    cryptoAssets,
    calculatorResult,

    //* Methods
    changeLoadingCryptoCalculator,
    getCryptoAssets,
    getEarningsCryptocurrency,
    clearCryptoCalculator
  };
};
