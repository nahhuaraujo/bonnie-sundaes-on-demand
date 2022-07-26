import { useState } from 'react';

import * as S from './SummaryForm.styled';

const SummaryForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const clickHandler = ({ target }) => {
    setIsDisabled(!target.checked);
  };

  return (
    <S.SummaryForm>
      <S.TermsConfirmation>
        <S.TermsConfirmationCheckbox id='terms-confirmation-checkbox' type='checkbox' onClick={clickHandler} />
        <label htmlFor='terms-confirmation-checkbox'>I agree to Terms and Conditions</label>
      </S.TermsConfirmation>
      <div>
        <button disabled={isDisabled} type='button'>
          Confirm order
        </button>
      </div>
    </S.SummaryForm>
  );
};

export default SummaryForm;
