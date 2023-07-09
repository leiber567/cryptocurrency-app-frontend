import { Box, Typography } from '@mui/material';
import { formatUsdValue } from '@/helpers/utilsHelper.js';

export const CalculatorResultDetail = ({ resultDetail, assetSymbol }) => {
  return (
    <Box
      sx={{
        margin: '0.5rem 0'
      }}
    >
      <Typography>
        Earning coin: {`${resultDetail.earningCoin.toFixed(2)} ${assetSymbol}`}
      </Typography>
      <Typography>
        Earning balance: {`${formatUsdValue(resultDetail.earningBalance)}`}
      </Typography>
    </Box>
  )
}
