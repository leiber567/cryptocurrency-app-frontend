import CalculateIcon from '@mui/icons-material/Calculate';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

export const MENU_OPTIONS = [
  {
    title: "Crypto calculator",
    to: "calculator",
    icon: <CalculateIcon sx={{color: 'white'}}/>
  },
  {
    title: "Crypto metrics",
    to: "metrics",
    icon: <CurrencyBitcoinIcon sx={{color: 'white'}}/>
  },
];

