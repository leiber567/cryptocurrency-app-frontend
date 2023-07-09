import { Avatar, Box, Typography } from '@mui/material';
import {
  abbreviateDollarNumber,
  formatPercentageValue,
  formatUsdValue,
  getColorGain,
} from '@/helpers/utilsHelper.js';

export const TABLE_COLUMNS = [
  {
    id: 'slug', label: 'Asset', sorter: true,
    format: (row) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Avatar
          src={row.image}
          alt={`crypto-asset-${row.symbol}`}
          sx={{ width: 18, height: 18 }}
        />
        <Typography
          sx={{
            paddingLeft: '5px',
            textTransform: 'capitalize',
            fontSize: '0.875rem'
          }}
        >
          { `${row.slug} (${row.symbol})` }
        </Typography>
      </Box>
    )
  },
  {
    id: 'priceUsd', label: 'Price (USD)',
    minWidth: 150, align: 'right', sorter: true, sortType: 'number',
    format: (value) => (
      <Typography>
        { formatUsdValue(value) }
      </Typography>
    )
  },
  {
    id: 'percentageChange1HrUsd', label: 'Change vs USD (1h)',
    minWidth: 50, align: 'right', sorter: true, sortType: 'number',
    format: (value) => (
      <Typography
        sx={{
          color: getColorGain(value)
        }}
      >
        { formatPercentageValue(value) }
      </Typography>
    )
  },
  {
    id: 'percentageChange24HrUsd', label: 'Change vs USD (24h)',
    minWidth: 50, align: 'right', sorter: true, sortType: 'number',
    format: (value) => (
      <Typography
        sx={{
          color: getColorGain(value)
        }}
      >
        { formatPercentageValue(value) }
      </Typography>
    )
  },
  {
    id: 'last7daysTrend', label: '7 day trend',
    minWidth: 50, align: 'right', sorter: true, sortType: 'number',
    format: (value) => (
      <img
        src={value}
        alt='7 days trend'
      />
    )
  },
  {
    id: 'currentMarketcap', label: 'Reported marketcap',
    minWidth: 50, align: 'right', sorter: true, sortType: 'number',
    format: (value) => (
      <Typography>
        { `$${abbreviateDollarNumber(value)}` }
      </Typography>
    )
  },
  {
    id: 'realVol24HrUsd', label: 'Real volume (24h)',
    minWidth: 50, align: 'right', sorter: true, sortType: 'number',
    format: (value) => (
      <Typography>
        { `$${abbreviateDollarNumber(value)}` }
      </Typography>
    )
  },
  {
    id: 'percentageChange7dUsd', label: 'Change vs USD (7d)',
    minWidth: 50, align: 'right', sorter: true, sortType: 'number',
    format: (value) => (
      <Typography
        sx={{
          color: getColorGain(value)
        }}
      >
        { formatPercentageValue(value) }
      </Typography>
    )
  },
  {
    id: 'percentageChange30dUsd', label: 'Change vs USD (30d)',
    minWidth: 50, align: 'right', sorter: true, sortType: 'number',
    format: (value) => (
      <Typography
        sx={{
          color: getColorGain(value)
        }}
      >
        { formatPercentageValue(value) }
      </Typography>
    )
  },
  {
    id: 'percentageChangeYtdUsd', label: 'Change vs USD (YTD)',
    minWidth: 50, align: 'right', sorter: true, sortType: 'number',
    format: (value) => (
      <Typography
        sx={{
          color: getColorGain(value)
        }}
      >
        { formatPercentageValue(value) }
      </Typography>
    )
  },
  {
    id: 'sector', label: 'Sector',
    minWidth: 50, align: 'right', sorter: true,
    format: (value) => (
      <Typography>
        { value || '--' }
      </Typography>
    )
  },
];

export const getRowUserValue = (row, key) => {
  if (key === 'slug') return row;
  return row[key];
};


