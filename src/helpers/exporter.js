import { saveAs } from 'file-saver';
import {
  abbreviateDollarNumber,
  formatPercentageValue,
  formatUsdValue,
} from '@/helpers/utilsHelper.js';

export const CRYPTO_CURRENCY_HEADER_FILE = [
  'Asset', 'Price (USD)', 'Change vs USD (1h)', 'Change vs USD (24h)',
  'Reported marketcap', 'Real volume (24h)', 'Change vs USD (7d)',
  'Change vs USD (30d)', 'Change vs USD (YTD)', 'Sector'
]

export const formatCsvCryptocurrencyMarketData = (cryptoMarketData) => {
  return cryptoMarketData.map(currentCryptoMarket => ({
    slug: `${currentCryptoMarket.slug} (${currentCryptoMarket.symbol})`,
    priceUsd: `"${formatUsdValue(currentCryptoMarket.priceUsd)}"`,
    percentageChange1HrUsd: `"${formatPercentageValue(currentCryptoMarket.percentageChange1HrUsd)}"`,
    percentageChange24HrUsd: `"${formatPercentageValue(currentCryptoMarket.percentageChange24HrUsd)}"`,
    currentMarketcap: `"$${abbreviateDollarNumber(currentCryptoMarket.currentMarketcap)}"`,
    realVol24HrUsd: `"$${abbreviateDollarNumber(currentCryptoMarket.realVol24HrUsd)}"`,
    percentageChange7dUsd: `"${formatPercentageValue(currentCryptoMarket.percentageChange7dUsd)}"`,
    percentageChange30dUsd: `"${formatPercentageValue(currentCryptoMarket.percentageChange30dUsd)}"`,
    percentageChangeYtdUsd: `"${formatPercentageValue(currentCryptoMarket.percentageChangeYtdUsd)}"`,
    sector: currentCryptoMarket.sector
  }))
}

export const formatJsonCryptoCurrencyMarketData = (cryptoMarketData) => {
  return cryptoMarketData.map(currentCryptoMarket => ({
    slug: currentCryptoMarket.slug,
    priceUsd: currentCryptoMarket.priceUsd,
    percentageChange1HrUsd: currentCryptoMarket.percentageChange1HrUsd,
    percentageChange24HrUsd: currentCryptoMarket.percentageChange24HrUsd,
    currentMarketcap: currentCryptoMarket.currentMarketcap,
    realVol24HrUsd: currentCryptoMarket.realVol24HrUsd,
    percentageChange7dUsd: currentCryptoMarket.percentageChange7dUsd,
    percentageChange30dUsd: currentCryptoMarket.percentageChange30dUsd,
    percentageChangeYtdUsd: currentCryptoMarket.percentageChangeYtdUsd,
    sector: currentCryptoMarket.sector,
  }))
}

export const exportToCsv = (exportData, exportHeaders, fileName) => {
  const csvData = [exportHeaders.join(',')];

  exportData.forEach((item) => {
    const row = Object.values(item).join(',');
    csvData.push(row);
  });

  const csvString = csvData.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8' });
  saveAs(blob, `${fileName}.csv`);
};

export const exportToJson = (exportData, fileName) => {
  const jsonData = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonData], { type: 'application/json' });
  saveAs(blob, `${fileName}.json`);
};
