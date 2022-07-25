import { render, screen, fireEvent } from '@testing-library/react';

import { SummaryForm } from '../../pages';

describe('SummaryForm', () => {
  test('Initial conditions', () => {
    render(<SummaryForm />);
    const termsConfirmationCheckbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
    const confirmOrderButton = screen.getByRole('button', { name: 'Confirm order' });

    expect(termsConfirmationCheckbox).not.toBeChecked();
    expect(confirmOrderButton).toBeDisabled();

    fireEvent.click(termsConfirmationCheckbox);
    expect(confirmOrderButton).toBeEnabled();

    fireEvent.click(termsConfirmationCheckbox);
    expect(confirmOrderButton).toBeDisabled();
  });
});
