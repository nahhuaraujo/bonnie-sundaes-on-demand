import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Options } from '.';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Options', () => {
  test('Displays image for each scoop option from server', async () => {
    render(
      <Provider store={store}>
        <Options optionType='scoops' imageWidth={100} />
      </Provider>
    );

    // se usa await findAllByRole para buscar todos los img de modo async
    const scoopsImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopsImages).toHaveLength(2);

    // @ts-ignore
    const altTextArray = scoopsImages.map(scoopImg => scoopImg.alt);
    // se usa toEqual para hacerle un assertion a un objeto o array
    expect(altTextArray).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });

  test('Displays image for each topping option from server', async () => {
    render(
      <Provider store={store}>
        <Options optionType='toppings' imageWidth={100} />
      </Provider>
    );

    const toppingsImages = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingsImages).toHaveLength(2);

    // @ts-ignore
    const altTextArray = toppingsImages.map(toppingImg => toppingImg.alt);
    expect(altTextArray).toEqual(['M&Ms topping', 'Gummi Bears topping']);
  });

  test('Update scoop subtotal when scoops changes', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <Options optionType='scoops' imageWidth={100} />
      </Provider>
    );

    const scoopSubtotal = screen.getByText('Scoops total:', { exact: false });
    expect(scoopSubtotal).toHaveTextContent('0');

    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '1');

    expect(scoopSubtotal).toHaveTextContent('2');

    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
    await user.clear(chocolateInput);
    await user.type(chocolateInput, '2');

    expect(scoopSubtotal).toHaveTextContent('6');
  });

  test('Update toppings subtotal when toppings change', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <Options optionType='toppings' imageWidth={100} />
      </Provider>
    );

    const toppingsSubtotal = screen.getByText('Toppings total:', { exact: false });
    expect(toppingsSubtotal).toHaveTextContent('0');

    const mmsTopping = await screen.findByRole('checkbox', { name: 'M&Ms' });
    await user.click(mmsTopping);
    expect(mmsTopping).toBeChecked();

    expect(toppingsSubtotal).toHaveTextContent('1.5');

    const gummybearsTopping = await screen.findByRole('checkbox', { name: 'Gummi Bears' });
    await user.click(gummybearsTopping);
    expect(gummybearsTopping).toBeChecked();

    expect(toppingsSubtotal).toHaveTextContent('3');

    await user.click(mmsTopping);
    expect(mmsTopping).not.toBeChecked();

    expect(toppingsSubtotal).toHaveTextContent('1.5');
  });
});
