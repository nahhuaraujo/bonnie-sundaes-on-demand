import { SummaryForm } from '../../atoms';

import * as S from './OrderSummary.styled';

const OrderSummary = () => {
  return (
    <S.OrderSummary>
      <h1>Order Summary</h1>
      <SummaryForm />
    </S.OrderSummary>
  );
};

export default OrderSummary;
