import { screen, render } from '@testing-library/react';
import { OrderSummary } from '.';

describe('OrderSummary', () => {
  test('Initial conditions', () => {
    render(<OrderSummary />);
  });
});
