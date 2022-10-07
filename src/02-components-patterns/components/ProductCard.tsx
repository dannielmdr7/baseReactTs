import { useProduct } from '../hooks/useProduct';
import { Product, ProductsContextProps } from '../interfaces/Product.interface';

import styles from '../styles/styles.module.css';
import { createContext, ReactElement, CSSProperties } from 'react';

export const ProductContext = createContext({} as ProductsContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
