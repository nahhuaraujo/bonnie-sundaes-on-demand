import { render, screen, fireEvent } from '@testing-library/react';

import { SummaryForm } from '../../pages';

describe('SummaryForm', () => {
  test('Initial conditions', () => {
    render(<SummaryForm />);
    const termsConfirmationCheckbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
    const confirmOrderButton = screen.getByRole('button', { name: 'Confirm order' });
    // Is unchecked by default
    expect(termsConfirmationCheckbox).not.toBeChecked();
    expect(confirmOrderButton).toBeDisabled();
    // Checking enables the button
    fireEvent.click(termsConfirmationCheckbox);
    expect(confirmOrderButton).toBeEnabled();
    // Unchecking disables the button
  });
});
