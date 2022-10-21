import { useState } from 'react';
import * as S from './SummaryForm.styled';

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const mouseEnterHandler = () => {
    setShowTerms(true);
  };

  const mouseLeaveHandler = () => {
    setShowTerms(false);
  };

  return (
    <S.SummaryForm>
      <S.TermsCheckbox id='terms-and-conditions' type='checkbox' checked={isChecked} onChange={checkHandler} />
      <S.TermsLabel htmlFor='terms-and-conditions'>
        I agree to{' '}
        <S.TermsSpan onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          terms and conditions
        </S.TermsSpan>
        {showTerms && <S.TermsPopover>I understand I won't recieve any sundae</S.TermsPopover>}
      </S.TermsLabel>
      <S.ConfirmOrderButton disabled={!isChecked}>Confirm order</S.ConfirmOrderButton>
    </S.SummaryForm>
  );
};

export default SummaryForm;
