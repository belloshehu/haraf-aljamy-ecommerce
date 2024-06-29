export const getPriceWithoutDiscount = (price, discount) => {
  return price + (price * discount) / 100;
};
