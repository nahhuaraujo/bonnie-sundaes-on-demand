import { Options } from '../../components';
import * as S from './OrderEntry.styled';

const OrderEntry = () => {
  return (
    <S.OrderEntry>
      <h1>Design your sundae</h1>
      <h3>Scoops</h3>
      <Options optionType='scoops' imageWidth={150} />
      <br />
      <h3>Toppings</h3>
      <div>
        <Options optionType='toppings' imageWidth={150} />
      </div>
      <br />
      <h3>
        Grand total: <span>$0.00</span>
      </h3>
      <button>Order sundae</button>
    </S.OrderEntry>
  );
};

export default OrderEntry;
