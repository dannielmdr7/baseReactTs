import {  ProductCard  } from '../components/ProductCard';

import { Product } from '../interfaces/Product.interface';
import coffeeMug from '../../assets/coffee-mug.png';
import { ProductImage } from '../components';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';
const product: Product = {
  id: '7',
  title: 'Coffee - Mug - Card',
  img: coffeeMug,
};
export const ShoopingPage = () => {
  return (
    <div>
      <h1>Shooping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product}  >
          <ProductImage />
          <ProductTitle title='Daniel Master' />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product}  >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
