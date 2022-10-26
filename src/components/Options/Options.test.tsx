import { render, screen } from '@testing-library/react';
import { Options } from '.';

describe('Options', () => {
  test('Displays image for each scoop option from server', async () => {
    render(<Options optionType='scoops' imageWidth={100} />);

    // se usa await findAllByRole para buscar todos los img de modo async
    const scoopsImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopsImages).toHaveLength(2);

    // @ts-ignore
    const altTextArray = scoopsImages.map(scoopImg => scoopImg.alt);
    // se usa toEqual para hacerle un assertion a un objeto o array
    expect(altTextArray).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });

  test('Displays image for each topping option from server', async () => {
    render(<Options optionType='toppings' imageWidth={100} />);

    const toppingsImages = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingsImages).toHaveLength(2);

    // @ts-ignore
    const altTextArray = toppingsImages.map(toppingImg => toppingImg.alt);
    expect(altTextArray).toEqual(['M&Ms topping', 'Gummi Bears topping']);
  });
});
