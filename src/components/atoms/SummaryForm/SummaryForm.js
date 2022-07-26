import { useState } from 'react';

const SummaryForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const clickHandler = ({ target }) => {
    setIsDisabled(!target.checked);
  };

  return (
    <div>
      <div style={{ marginBottom: '0.5rem' }}>
        <input
          id='terms-confirmation-checkbox'
          type='checkbox'
          style={{ marginRight: '0.5rem' }}
          onClick={clickHandler}
        />
        <label htmlFor='terms-confirmation-checkbox'>I agree to Terms and Conditions</label>
      </div>
      <div>
        <button disabled={isDisabled} type='button'>
          Confirm order
        </button>
      </div>
    </div>
  );
};

export default SummaryForm;
