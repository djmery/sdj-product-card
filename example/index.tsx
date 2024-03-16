import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card!',
  //img: './coffee-mug.png'

}

const App = () => {
  return (
    <div>
      <>
        <ProductCard
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {
            ({ reset, increaseBy, maxCount, count, isMaxCountReached }) => (

              <>
                <ProductTitle />
                <ProductImage />
                <ProductButtons />

              </>

            )
          }
        </ProductCard>
      </>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
