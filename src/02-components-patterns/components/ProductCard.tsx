import { useProduct } from '../hooks/useProduct';
import {  ProductCardProps, ProductsContextProps } from '../interfaces/Product.interface';


import styles from '../styles/styles.module.css';
import {  createContext } from 'react';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductsContextProps);
const { Provider } = ProductContext;



export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage image={product.img} />
      <hr />
      <ProductTitle title={product.title} />
    <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
