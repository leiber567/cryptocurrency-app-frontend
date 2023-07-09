import React from 'react';
import { Box, Typography } from '@mui/material';
import { formatUsdValue } from '@/helpers/utilsHelper.js';

export const CalculatorResultDetail = ({ resultDetail }) => {
  return (
    <Box
      sx={{
        margin: '0.5rem 0'
      }}
    >
      <Typography>
        Initial coin price: {`${formatUsdValue(resultDetail.coinPriceUsd)}`}
      </Typography>
      <Typography sx={{marginBottom: '1rem'}}>
        Monthly return percentage: { resultDetail.monthlyReturn * 100 }%
      </Typography>
      <Typography>
        Coin earn value: {`${formatUsdValue(resultDetail.earningCoin)}`}
      </Typography>
      <Typography>
        Balance earn value: {`${formatUsdValue(resultDetail.earningBalance)}`}
      </Typography>
    </Box>
  )
}
