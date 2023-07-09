import { useCryptoMetricsStore, useWebSocket } from '@/hooks';
import { getEnvironment } from '@/helpers/env.js';
import { useEffect } from 'react';
import { Spinner } from '@/modules/main/components/index.js';
import { Box, Button, Typography } from '@mui/material';
import {
  CryptoMetricsTable,
} from '@/modules/main/components/tables/CryptoMetricsTable.jsx';
import {
  getRowUserValue,
  TABLE_COLUMNS,
} from '@/helpers/modules/cryptoMetrics.jsx';
import {
  CRYPTO_CURRENCY_HEADER_FILE,
  exportToCsv,
  exportToJson,
  formatCsvCryptocurrencyMarketData,
  formatJsonCryptoCurrencyMarketData,
} from '@/helpers/exporter.js';

export const MetricsCryptocurrency = () => {
  const {
    loadingCryptoMetrics,
    cryptoMarketData,
    getCryptoMarketData,
    handleSocketMarketMessage,
    clearCryptoMetrics,
  } = useCryptoMetricsStore();

  const url = getEnvironment().messariWsUrl;
  const socketClient = useWebSocket(url, handleSocketMarketMessage);

  const initCryptoMarketData = async () => {
    await getCryptoMarketData();
    socketClient.connect();
  };

  const startExportToCsv = () => {
    exportToCsv(
      formatCsvCryptocurrencyMarketData(cryptoMarketData),
      CRYPTO_CURRENCY_HEADER_FILE,
      'crypto_currency_metrics',
    );
  };
  const startExportToJson = () => {
    exportToJson(
      formatJsonCryptoCurrencyMarketData(cryptoMarketData),
      'crypto_currency_metrics',
    );
  };
  const getRowValue = (row, key) => {
    return getRowUserValue(row, key);
  };
  useEffect(() => {
    initCryptoMarketData();
    return () => {
      clearCryptoMetrics();
      socketClient.disconnect();
    };
  }, []);
  return (
    <Box>
      <Spinner open={loadingCryptoMetrics}/>
      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          Cryptocurrency metrics
        </Typography>
      </Box>
      <Box
        sx={{
          margin: '1rem 0',
          display: 'flex',
        }}
      >
        <Button
          sx={{
            margin: '0 5px',
          }}
          variant="contained"
          onClick={startExportToCsv}
        >
          Export CSV
        </Button>
        <Button
          variant="contained"
          onClick={startExportToJson}
        >
          Export JSON
        </Button>
      </Box>
      <Box>
        <CryptoMetricsTable
          rows={cryptoMarketData}
          columns={TABLE_COLUMNS}
          getRowValue={getRowValue}
          rowKey="id"
        />
      </Box>
    </Box>
  );
};
