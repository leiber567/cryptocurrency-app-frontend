import moment from 'moment-timezone';

export const DEBOUNCE_TIMEOUT = 200;

export const DEFAULT_PAGINATION = 10;

export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

export const parseDateToCompare = (value) => {
  return moment(value).valueOf();
};

export const descendingComparator = (a, b, orderBy, sortType) => {
  let valueB = b[orderBy] || '';
  let valueA = a[orderBy] || '';
  if (sortType === 'date') {
    valueB = parseDateToCompare(valueB);
    valueA = parseDateToCompare(valueA);
  }
  if (sortType === 'number') {
    valueB = Number(valueB);
    valueA = Number(valueA);
  }
  if (valueB < valueA) {
    return -1;
  }
  if (valueB > valueA) {
    return 1;
  }
  return 0;
};

export const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export const formatUsdValue = (value) => {
  return value.toLocaleString(
    'en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    })
}

export const formatPercentageValue = (value) => {
  let symbolGain = '';
  if (value > 0) symbolGain = '+';
  if (value < 0) symbolGain = '-';
  return `${symbolGain}${Math.abs(value).toFixed(2)}%`
}

export const abbreviateDollarNumber = (value) => {
  const abbreviations = [
    { value: 1e9, abbreviation: 'B' },
    { value: 1e6, abbreviation: 'M' },
    { value: 1e3, abbreviation: 'K' }
  ];

  for (let i = 0; i < abbreviations.length; i++) {
    if (value >= abbreviations[i].value) {
      const qty = value / abbreviations[i].value;
      const decimals = qty % 1 === 0 ? 0 : 2;

      return qty.toFixed(decimals) + abbreviations[i].abbreviation;
    }
  }

  return value.toString();
}

export const getColorGain = (value) => {
  if (value === 0) return '#A0ACC5'
  if (value > 0) return '#00CC3D'
  if (value < 0) return '#F33F54'
}
