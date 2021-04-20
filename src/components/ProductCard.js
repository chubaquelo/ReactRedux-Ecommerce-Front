import React from 'react';

const ProductCard = () => (
  <div id="app" className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
    <img className="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Jewel" />
    <div className="w-full flex flex-col">
      <div className="p-4 pb-0 flex-1">
        <h3 className="font-light mb-1 text-grey-darkest">Tower Hotel</h3>
        <div className="text-xs flex items-center mb-4">
          <i className="fas fa-map-marker-alt mr-1 text-grey-dark" />
          Soho, London
        </div>
        <span className="text-5xl text-grey-darkest">
          £63.00
          <span className="text-lg">/PPPN</span>
        </span>
        <div className="flex items-center mt-4">
          <div className="pr-2 text-xs">
            <i className="fas fa-wifi text-green" />
            {' '}
            Free WiFi
          </div>
          <div className="px-2 text-xs">
            <i className="text-grey-darker far fa-building" />
            {' '}
            2mins to center
          </div>
        </div>
      </div>
      <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
        Book Now
        <i className="fas fa-chevron-right" />
      </div>
    </div>
  </div>
);

export default ProductCard;
