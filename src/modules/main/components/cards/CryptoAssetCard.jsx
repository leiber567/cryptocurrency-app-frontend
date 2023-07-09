import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

export const CryptoAssetCard = ({ cryptoAssetData }) => {
  return (
    <Card
      sx={{
        width: {
          xs: '100%',
          sm: '100%',
          md: '60%',
        }
      }}
    >
      <CardContent>
        <Box
          className='content-center'
          sx={{
            marginBottom: '1rem'
          }}
        >
          <img
            src={cryptoAssetData.image}
            alt={`crypto-asset-${cryptoAssetData.symbol}`}
          />
        </Box>
        <Typography
          variant="body2"
          color="primary.main"
          sx={{
            textTransform: 'capitalize',
            fontWeight: 600,
            fontSize: '1.5rem',
            textAlign: 'center'
          }}
        >
          { `${cryptoAssetData.slug} (${cryptoAssetData.symbol})` }
        </Typography>
      </CardContent>
    </Card>
  )
}
