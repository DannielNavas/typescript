import { addProduct, calcStock, product } from './product.service';

addProduct({
  title: 'Shirt',
  createAt: new Date(),
  stock: 8,
  size: 'small',
});

addProduct({
  title: 'Pants',
  createAt: new Date(),
  stock: 10,
});

console.log(product);
console.log(calcStock());
