import { useState } from 'react';

import * as S from './SummaryForm.styled';

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [show, setShow] = useState(false);

  const checkHandler = ({ target }) => {
    setIsChecked(target.checked);
  };

  const mouseEnterHandler = () => {
    setShow(true);
  };

  const mouseLeaveHandler = () => {
    setShow(false);
  };

  return (
    <S.SummaryForm>
      <S.TermsConfirmation>
        <S.TermsConfirmationCheckbox id='terms-confirmation-checkbox' type='checkbox' onClick={checkHandler} />
        <label htmlFor='terms-confirmation-checkbox' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <span>
            I agree to <S.TermsSpan>Terms and Conditions</S.TermsSpan>
          </span>
        </label>
        <S.TermsAndConditions show={show}>
          I understand that I won't recieve any icecream whatsoever
        </S.TermsAndConditions>
      </S.TermsConfirmation>
      <div>
        <button disabled={!isChecked} type='button'>
          Confirm order
        </button>
      </div>
    </S.SummaryForm>
  );
};

export default SummaryForm;
