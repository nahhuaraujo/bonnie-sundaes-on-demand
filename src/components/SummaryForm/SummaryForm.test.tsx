import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SummaryForm } from '.';

describe('SummaryForm', () => {
  test('Checkbox is unchecked and button is disabled by default', () => {
    render(<SummaryForm />);

    const termsAndConditionsCheckbox = screen.getByRole('checkbox');
    const confirmButton = screen.getByRole('button');

    expect(termsAndConditionsCheckbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  test('Checking checkbox enables button, unckecking disables button', async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();

    const termsAndConditionsCheckbox = screen.getByRole('checkbox');
    const confirmButton = screen.getByRole('button');

    await user.click(termsAndConditionsCheckbox);

    expect(termsAndConditionsCheckbox).toBeChecked();
    expect(confirmButton).toBeEnabled();

    await user.click(termsAndConditionsCheckbox);

    expect(termsAndConditionsCheckbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  test("Hover over Terms and conditions span toggles popover's visibility", async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();

    // se usa query porque devuelve null al no encontrar el elemento
    const hiddenPopover = screen.queryByTestId('termsPopover');
    expect(hiddenPopover).not.toBeInTheDocument();

    const termsSpan = screen.getByText(/terms and conditions/i);
    await user.hover(termsSpan);

    // se usa get porque se espera encontrar el elemento
    const popover = screen.getByText(/I understand I won't recieve any sundae/i);
    expect(popover).toBeInTheDocument();

    await user.unhover(termsSpan);
    expect(popover).not.toBeInTheDocument();
  });
});
