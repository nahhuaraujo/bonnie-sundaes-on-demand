import { Options } from '../../components';

const OrderEntry = () => {
  return (
    <div>
      <h2>Design your sundae</h2>
      <h3>Scoops</h3>
      <Options optionType='scoops' imageWidth={100} />
      <h3>Toppings</h3>
      <Options optionType='toppings' imageWidth={100} />
      <h3>
        Grand total: <span>$0.00</span>
      </h3>
      <button>Order sundae</button>
    </div>
  );
};

export default OrderEntry;
