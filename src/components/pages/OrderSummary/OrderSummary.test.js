import { render } from '@testing-library/react';

import { OrderSummary } from '../../pages';

describe('OrderSummary', () => {
  test('Initial conditions', () => {
    render(<OrderSummary />);
  });
});
