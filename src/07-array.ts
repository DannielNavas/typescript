(() => {
  let price = [100, 200, 300, 'asd', true];
  // price.push('0');
  // price.push(true);
  // price.push('0');
  // price.push({});
  price.push('0');

  let products: string[] = ['Product 1', 'Product 2', 'Product 3'];

  let mixed: (string | number | boolean)[] = [
    'Product 1',
    100,
    'Product 3',
    true,
    false,
    200,
    'Product 6',
  ];
  mixed.push('Product 7');
  mixed.push(300);
  mixed.push(false);
})();
