export interface ISummary {
  scoops: {
    selected: {
      scoopName: string;
      scoopQnty: number;
    }[];
    price: number;
    subtotal: number;
  };
  toppings: {
    selected: { toppingName: string }[];
    price: number;
    subtotal: number;
  };
  total: number;
}
