import { render, screen } from '@testing-library/react';
import { Options } from '.';

describe('Options', () => {
  test('Displays image for each scoop option from server', async () => {
    render(<Options optionType='scoops' />);

    // se usa await findAllByRole para buscar todos los img de modo async
    const scoopsImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopsImages).toHaveLength(2);

    // @ts-ignore
    const altText = scoopsImages.map(scoopImg => scoopImg.alt);
    // se usa toEqual para hacerle un assertion a un objeto o array
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });

  test('Displays image for each topping option from server', async () => {
    render(<Options optionType='toppings' />);

    const toppingsImages = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingsImages).toHaveLength(2);

    // @ts-ignore
    const altText = toppingsImages.map(toppingImg => toppingImg.alt);
    expect(altText).toEqual(['M&Ms topping', 'Gummi Bears topping']);
  });
});
