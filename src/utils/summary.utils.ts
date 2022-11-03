interface Scoop {
  scoopName: string;
  scoopQnty: number;
}

export const sumScoops = (scoops: Scoop[], price: number) => {
  let total: number = 0;
  scoops.forEach(scoop => {
    total += scoop.scoopQnty * price;
  });
  return total;
};

interface Topping {
  toppingName: string;
}

export const sumToppings = (toppings: Topping[], price: number) => {
  let total: number = 0;
  toppings.forEach(topping => {
    total += price;
  });
  return total;
};

export const sumTotal = (scoopsSubtotal: number, toppingsSubtotal: number) => {
  return scoopsSubtotal + toppingsSubtotal;
};
