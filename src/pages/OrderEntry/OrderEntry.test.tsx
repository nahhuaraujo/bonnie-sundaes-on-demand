import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { OrderEntry } from '.';
import { server } from '../../mocks/server';

describe('OrderEntry', () => {
  test('Shows alert banner when service responds with error', async () => {
    server.resetHandlers(
      rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
      rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<OrderEntry />);

    await waitFor(async () => {
      const alerts = await screen.findAllByRole('alert');
      expect(alerts).toHaveLength(2);
    });
  });
});
