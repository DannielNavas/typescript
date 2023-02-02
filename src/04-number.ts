(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log(productPrice);

  let custumerAge: number = 33;
  custumerAge = custumerAge + 1;
  // TODO: js imprimiraia 28 + 1 en el caso 28 + '1' ts daria un error de tipos
  console.log(custumerAge);

  let productInStock: number;
  console.log(productInStock);
  if (productInStock) {
    console.log('Hay stock');
  }

  let discount = parseInt('10');
  console.log(discount);
  let hex = 0xf00d;
  console.log(hex);
  let binary = 0b1010;
  console.log(binary);
  //TODO: no usar la interfaz Number para declarar variables de tipo number
  const myNumber: Number = 10;
})();
