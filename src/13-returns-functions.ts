(() => {
  const calcTotal = (price: number[]): number => {
    return price.reduce((total, price) => total + price, 0);
  };

  console.log(calcTotal([1, 2, 3, 4, 5]));

  const printTotal = (price: number[]): void => {
    console.log(calcTotal(price));
  };

  printTotal([1, 2, 3, 4, 5]);
})();
