import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { CalculatorResultDetail } from '@/modules/main/pages/calculatorCryptocurrency/CalculatorResultDetail.jsx';
import { formatUsdValue } from '@/helpers/utilsHelper.js';

describe('CalculatorResultDetail', () => {
  const resultDetail = {
    coinPriceUsd: 100,
    monthlyReturn: 0.05,
    earningCoin: 500,
    earningBalance: 25000
  };

  it('renders the correct result details', () => {
    const { getByText } = render(
      <CalculatorResultDetail resultDetail={resultDetail} />
    );

    const initialCoinPriceText = getByText(`Initial coin price: ${formatUsdValue(resultDetail.coinPriceUsd)}`);
    const monthlyReturnText = getByText(`Monthly return percentage: ${resultDetail.monthlyReturn * 100}%`);
    const coinEarnValueText = getByText(`Coin earn value: ${formatUsdValue(resultDetail.earningCoin)}`);
    const balanceEarnValueText = getByText(`Balance earn value: ${formatUsdValue(resultDetail.earningBalance)}`);

    expect(initialCoinPriceText).toBeInTheDocument();
    expect(monthlyReturnText).toBeInTheDocument();
    expect(coinEarnValueText).toBeInTheDocument();
    expect(balanceEarnValueText).toBeInTheDocument();
  });
});
