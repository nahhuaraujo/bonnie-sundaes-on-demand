import { render, screen, fireEvent } from '@testing-library/react';

import { SummaryForm } from '../../atoms';

describe('SummaryForm', () => {
  test('Initial conditions', () => {
    render(<SummaryForm />);

    const termsConfirmationCheckbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const confirmOrderButton = screen.getByRole('button', { name: /confirm order/i });

    expect(termsConfirmationCheckbox).not.toBeChecked();
    expect(confirmOrderButton).toBeDisabled();
  });

  test('Checkbox disables button on first click and enables it in the second click', () => {
    render(<SummaryForm />);
    const termsConfirmationCheckbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const confirmOrderButton = screen.getByRole('button', { name: /confirm order/i });

    fireEvent.click(termsConfirmationCheckbox);
    expect(termsConfirmationCheckbox).toBeChecked();
    expect(confirmOrderButton).toBeEnabled();

    fireEvent.click(termsConfirmationCheckbox);
    expect(termsConfirmationCheckbox).not.toBeChecked();
    expect(confirmOrderButton).toBeDisabled();
  });
});
