import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../store/actions';

const Product = () => {
  const productId = useParams().id;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setLoading(false);
    setCurrentProduct(
      products.filter(product => product.id.toString() === productId)[0],
    );
  }, [products]);

  window.console.log(products.filter(product => product.id.toString() === productId)[0]);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <section className="h-60percent-vh mt-5">
          <h1 className="text-3xl font-bold text-center">
            {currentProduct.title}
          </h1>
          <p className="text-center mt-5">{currentProduct.description}</p>
          <div className="flex flex-row flex-wrap justify-center mt-12">
            <div className="w-6/12 text-center" id="product-image">
              <img
                src="https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa11adeb0/images/hi-res/RGN464_RGN464_GN9417_model_4.jpg?sw=1000&sh=1000"
                alt="Necklace"
              />
            </div>
            <div className="w-6/12 text-center" id="product-buy-now">
              <p className="text-xl">
                Price:
                {' $'}
                {currentProduct.price}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;
