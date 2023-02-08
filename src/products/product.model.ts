export type Size = 'small' | 'medium' | 'large' | 'extra large';

export type Product = {
  title: string;
  createAt: Date;
  stock: number;
  size?: Size;
};
