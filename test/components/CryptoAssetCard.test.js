import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { CryptoAssetCard } from '@/modules/main/components/cards/index.js';

describe('CryptoAssetCard', () => {
  it('renders the correct crypto asset data', () => {
    const cryptoAssetData = {
      image: 'path/to/image',
      slug: 'crypto-asset',
      symbol: 'BTC',
    };

    const { getByAltText, getByText } = render(
      <CryptoAssetCard cryptoAssetData={cryptoAssetData} />
    );

    const imageElement = getByAltText('crypto-asset-BTC');
    const textElement = getByText('crypto-asset (BTC)');

    expect(imageElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
