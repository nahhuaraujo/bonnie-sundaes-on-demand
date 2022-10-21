import { render, screen } from '@testing-library/react';
import { Options } from '.';

describe('Options', () => {
  test('Displays image for each scoop option from server', async () => {
    render(<Options optionType='scoops' />);

    const scoopsImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopsImages).toHaveLength(2);

    // @ts-ignore
    const altText = scoopsImages.map(scoopImg => scoopImg.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });
});
