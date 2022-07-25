const SummaryForm = () => {
  return (
    <>
      <div style={{ marginBottom: '0.5rem' }}>
        <input type='checkbox' style={{ marginRight: '0.5rem' }} />I agree to Terms and Conditions
      </div>
      <div>
        <button type='button'>Confirm order</button>
      </div>
    </>
  );
};

export default SummaryForm;
