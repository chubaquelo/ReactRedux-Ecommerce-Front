import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../store/actions';
import ProductCard from './_ProductCard';

const ProductsList = () => {
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    // setLoading(false);
    dispatch(getProducts());
  }, []);

  const productMap = products.map(p => (
    <article key={p.id} className="w-11/12 md:w-4/12">
      <ProductCard
        key={p.id}
        keyForLink={p.id}
        title={p.title}
        description={p.description}
        price={p.price}
      />
    </article>
  ));

  console.log(productMap, 'from ProductsList');

  return (
    <section className="mt-6 flex flex-row flex-wrap">
      {productMap}
    </section>
  );
};

export default ProductsList;
