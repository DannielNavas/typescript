(() => {
  type Size = 'small' | 'medium' | 'large' | 'extra large';

  type Product = {
    title: string;
    createAt: Date;
    stock: number;
    size?: Size;
  };

  const product: Product[] = [];

  const addProduct = (data: Product) => {
    product.push(data);
  };

  addProduct({
    title: 'Shirt',
    createAt: new Date(),
    stock: 10,
    size: 'small',
  });

  addProduct({
    title: 'Pants',
    createAt: new Date(),
    stock: 10,
  });

  console.log(product);
})();
