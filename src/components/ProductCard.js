import React from 'react';

const ProductCard = () => (
  <div className="w-80 flex justify-center items-center">
    <div className="w-full p-4">
      <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
        <div className="prod-title">
          <p className="text-2xl uppercase text-gray-900 font-bold">
            Fine Silver Necklace
          </p>
          <p className="uppercase text-sm text-gray-400">
            Watch it and use it for every ocasion.
          </p>
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
            <p className="font-bold text-xl">$ 295</p>
            <button
              type="button"
              className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
