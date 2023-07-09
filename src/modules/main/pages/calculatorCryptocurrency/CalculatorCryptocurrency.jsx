import {
  Box, Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useCryptoCalculatorStore } from '@/hooks/index.js';
import { useEffect, useState } from 'react';
import {
  CryptoAssetCard,
  NumericFormatCustom,
  Spinner,
} from '@/modules/main/components';
import {
  CalculatorResultDetail,
} from '@/modules/main/pages/calculatorCryptocurrency/CalculatorResultDetail.jsx';
import { formatUsdValue } from '@/helpers/utilsHelper.js';

export const CalculatorCryptocurrency = () => {
  const [amountValue, setAmountValue] = useState('');

  const {
    loadingCryptoCalculator,
    cryptoAssets,
    calculatorResult,
    getCryptoAssets,
    getEarningsCryptocurrency,
  } = useCryptoCalculatorStore();
  const sendCalculator = (event) => {
    event.preventDefault();
    getEarningsCryptocurrency(Number(amountValue));
  };
  useEffect(() => {
    getCryptoAssets();
  }, []);
  return (
    <Box>
      <Spinner open={loadingCryptoCalculator}/>
      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
          }}
        >
          Cryptocurrency calculator
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
          }}
        >
          Enter a value to calculate the annual profit in the displayed
          currencies
        </Typography>
      </Box>
      <form onSubmit={sendCalculator}>
        <Box
          className="content-center"
          sx={{ margin: '1rem 0' }}
        >
          <TextField
            label="USD value"
            value={amountValue}
            onChange={(event) => setAmountValue(event.target.value)}
            name="numberformat"
            id="value-usd-calculator"
            InputProps={{
              inputComponent: NumericFormatCustom,
            }}
            variant="filled"
          />
        </Box>
        <Box
          className="content-center"
          sx={{ margin: '1rem 0' }}
        >
          <Button
            variant="contained"
            disabled={!amountValue || !Number(amountValue)}
            type="submit"
          >
            Calculate
          </Button>
        </Box>
      </form>
      {
        calculatorResult && (
          <Box
            sx={{ margin: '1rem 0' }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              Initial USD value: {`${formatUsdValue(Number(amountValue))}`}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              Total gain: {`${formatUsdValue(calculatorResult.earningTotal)}`}
            </Typography>
          </Box>
        )
      }
      <Box>
        <Grid
          container
          spacing={2}
          className="content-center"
        >
          {
            cryptoAssets.map(currentCryptoAsset => (
              <Grid
                key={currentCryptoAsset.id}
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  margin: '1rem 0',
                  padding: '0 0.5rem',
                }}
              >
                <Box className="content-center">
                  <CryptoAssetCard
                    key={currentCryptoAsset.id}
                    cryptoAssetData={currentCryptoAsset}
                  />
                </Box>
                <Box className="content-center">
                  {
                    calculatorResult &&
                    calculatorResult[currentCryptoAsset.symbol] && (
                      <CalculatorResultDetail
                        resultDetail={calculatorResult[currentCryptoAsset.symbol]}
                        assetSymbol={currentCryptoAsset.symbol}
                      />
                    )
                  }
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  );
};
