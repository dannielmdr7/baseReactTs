import { ProductCard } from '../components/ProductCard';

import { Product } from '../interfaces/Product.interface';
import coffeeMug from '../../assets/coffee-mug.png';
import { ProductImage } from '../components';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';

import '../styles/custom-styles.css';

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
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle title="Daniel Master" className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{backgroundColor:'#70D1F8'}}>
          <ProductImage />
          <ProductTitle title="Daniel Master" />
          <ProductButtons style={{ display:'flex', justifyContent:'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};
