import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({
  keyForLink,
  title,
  description,
  price,
}) => (
  <div className="w-full flex justify-center items-center">
    <div className="w-full p-4">
      <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
        <div className="prod-title">
          <p className="text-2xl uppercase text-gray-900 font-bold">{title}</p>
          <p className="uppercase text-sm text-gray-400">{description}</p>
        </div>
        <div className="prod-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMj27VPnHdFzA3ktTw1cD9QJOvgS-xIK_Wg&usqp=CAU"
            className="w-full object-cover object-center"
            alt="Jewel Product Pic"
          />
        </div>
        <div className="prod-info grid gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
            <p className="font-bold text-xl">
              $
              {price}
            </p>
            <Link to={`/product/${keyForLink}`}>
              <button
                type="button"
                className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;

ProductCard.defaultProps = {
  keyForLink: 0,
  title: '',
  description: '',
  price: 0,
};

ProductCard.propTypes = {
  keyForLink: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};
