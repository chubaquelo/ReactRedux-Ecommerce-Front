import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragSwitch } from 'react-dragswitch';
import getProducts from '../store/actions';
import ProductCard from './_ProductCard';
import 'react-dragswitch/dist/index.css';

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
        key={p.id}
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
        <span className="mr-2 italic text-gray-700">Only gold jewels</span>
        <DragSwitch
          checked={onlyGoldJewels}
          onColor="rgba(199, 129, 0, 0.91)"
          onChange={e => {
            setOnlyGoldJewels(e);
          }}
        />
      </div>
      <section id="products-list" className="mt-6 flex flex-row flex-wrap">
        {productMap}
      </section>
    </>
  );
};

export default ProductsList;
