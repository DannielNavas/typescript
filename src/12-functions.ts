(() => {
  type Size = 'small' | 'medium' | 'large' | 'extra large';
  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Size
  ) {
    return {
      title,
      createAt,
      stock,
      size,
    };
  }

  const product = createProductToJson('Shirt', new Date(), 10, 'small');
  console.log(product);

  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Size
  ) => {
    return {
      title,
      createAt,
      stock,
      size,
    };
  };

  const productV2 = createProductToJsonV2('Shirt', new Date(), 10);
  console.log(productV2);
})();
