(() => {
  let productTitle: string = 'My Product';
  // productTitle = null;
  // productTitle = () => { };
  // productTitle = 100;
  productTitle = 'My New Product';
  console.log(productTitle);

  const productDescription = 'This is my product';
  console.log(productDescription);

  const summary = `This is a summary of the product: ${productTitle}`;
})();
