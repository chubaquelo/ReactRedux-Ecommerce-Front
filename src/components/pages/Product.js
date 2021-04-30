import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../store/actions';

const Product = () => {
  const productId = useParams().id;
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setCurrentProduct(
      products.filter(product => product.id.toString() === productId)[0],
    );
  }, [products]);

  return (
    <>
      {currentProduct === [] || currentProduct === undefined ? (
        <h1 className="text-5xl text-center my-20">Loading...</h1>
      ) : (
        <section className="h-60percent-vh mt-5">
          <div className="flex flex-row flex-wrap justify-center mt-5">
            <div className="w-12/12 sm:w-6/12 text-center" id="product-image">
              <img
                src="https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa11adeb0/images/hi-res/RGN464_RGN464_GN9417_model_4.jpg?sw=1000&sh=1000"
                alt="Necklace"
              />
            </div>
            <div
              className="w-full lg:w-6/12 text-center pt-5"
              id="product-buy-now-section"
            >
              <h1 className="text-3xl font-bold text-center">
                {currentProduct.title}
              </h1>
              <p className="text-center mt-5 mb-2 w-10/12 mx-auto">
                {currentProduct.description}
              </p>
              <p className="text-center text-sm text-gray-500 mb-5 w-10/12 mx-auto">
                Material:
                {' '}
                {currentProduct.material === 'gold' ? 'Fine Gold' : 'Fine Silver'}
              </p>
              <p>
                ★★★★★ - 5.0 |
                <a
                  href="/"
                  className="text-sm cursor-pointer hover:underline ml-2"
                >
                  See 50 reviews
                </a>
              </p>

              <div className="flex flex-row justify-center items-center mt-3">
                <p className="text-3xl mr-4">
                  {' $'}
                  {currentProduct.price}
                </p>
                <button
                  type="button"
                  className="bg-yellow-500 text-white p-1 px-2 hover:bg-green-600 hover:shadow-lg"
                >
                  Buy Now
                </button>
              </div>
              <hr className="bg-gray-100 w-8/12 mx-auto my-8" />
              <div className="text-center w-8/12 mx-auto text-gray-500">
                <p>Enjoy Free shipping!</p>
                <p>All payment methods accepted!</p>
              </div>
              <hr className="bg-gray-100 w-8/12 mx-auto my-8" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;
