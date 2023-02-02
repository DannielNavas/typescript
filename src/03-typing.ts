(() => {
  let myProductName = 'My Product';
  let myProductPrice = 100;
  let myProduct = {
    name: myProductName,
    price: myProductPrice,
    getDiscountedPrice: function (discount: number) {
      return this.price * (1 - discount);
    },
  };
})();
