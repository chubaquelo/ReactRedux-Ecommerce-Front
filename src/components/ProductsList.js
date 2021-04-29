import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../store/actions';
import ProductCard from './_ProductCard';
import 'react-dragswitch/dist/index.css';
import ProductsFilter from './_ProductsFilter';

const ProductsList = () => {
  const [onlyGoldJewels, setOnlyGoldJewels] = useState(false);
  const dispatch = useDispatch();
  const products = onlyGoldJewels
    ? []
      .concat(useSelector(state => state.products))
      .filter(p => p.material === 'gold')
    : [].concat(useSelector(state => state.products));

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productMap = products.map(p => (
    <article key={p.id} className="w-full sm:w-1/2 xl:w-4/12">
      <ProductCard
        keyForLink={p.id}
        title={p.title}
        description={p.description}
        price={p.price}
      />
    </article>
  ));

  return (
    <>
      <div className="w-12/12 mt-10 flex justify-center">
        <ProductsFilter
          onlyGoldJewels={onlyGoldJewels}
          setOnlyGoldJewels={setOnlyGoldJewels}
        />
      </div>
      <section id="products-list" className="mt-6 flex flex-row flex-wrap">
        {productMap}
      </section>
    </>
  );
};

export default ProductsList;
