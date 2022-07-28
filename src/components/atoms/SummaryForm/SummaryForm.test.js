import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

    userEvent.click(termsConfirmationCheckbox);
    expect(termsConfirmationCheckbox).toBeChecked();
    expect(confirmOrderButton).toBeEnabled();

    userEvent.click(termsConfirmationCheckbox);
    expect(termsConfirmationCheckbox).not.toBeChecked();
    expect(confirmOrderButton).toBeDisabled();
  });

  test('Terms and Conditions hover/unhover triggers popover', () => {
    render(<SummaryForm />);

    const nullTermsPopover = screen.queryByText(/I won't recieve any icecream/i);
    expect(nullTermsPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const termsPopover = screen.getByText(/I won't recieve any icecream/i);
    expect(termsPopover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    expect(termsPopover).not.toBeInTheDocument();
  });
});
