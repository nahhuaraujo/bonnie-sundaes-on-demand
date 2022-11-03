import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { OrderEntry } from '.';
import { server } from '../../mocks/server';
import store from '../../redux/store';

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

    render(
      <Provider store={store}>
        <OrderEntry />
      </Provider>
    );

    await waitFor(async () => {
      const alerts = await screen.findAllByRole('alert');
      expect(alerts).toHaveLength(2);
    });
  });

  test('Updates total when scoops or toppings change', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <OrderEntry />
      </Provider>
    );

    const chocolateScoop = await screen.findByRole('spinbutton', { name: 'Chocolate' });
    await user.clear(chocolateScoop);
    await user.type(chocolateScoop, '2');

    const total = screen.getByText('Grand total', { exact: false });
    expect(total).toHaveTextContent('4');

    const mmsTopping = await screen.findByRole('checkbox', { name: 'M&Ms' });
    await user.click(mmsTopping);
    expect(mmsTopping).toBeChecked();

    expect(total).toHaveTextContent('5.5');

    await user.clear(chocolateScoop);
    await user.type(chocolateScoop, '0');
    await user.click(mmsTopping);

    expect(total).toHaveTextContent('0');
  });
});
