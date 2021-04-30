import React from 'react';
import { DragSwitch } from 'react-dragswitch';
import PropTypes from 'prop-types';

const ProductsFilter = ({
  onlyGoldJewels,
  setOnlyGoldJewels,
  searchTerm,
  setSearchTerm,
}) => (
  <div className="w-full md:w-1/2 md:flex justify-between items-center">
    <label
      htmlFor="search-box"
      className="italic text-gray-600 mt-8 md:mt-0 text-center md:text-left"
    >
      Search by Name:
      <input
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        name="search-box"
        type="text"
        className="ml-4 h-11 border p-4 text-gray-700 text-xl rounded-md"
      />
    </label>
    <div className="mt-8 md:mt-0 text-center md:text-left">
      <span className="mr-2 italic text-gray-700">Only gold jewels</span>
      <DragSwitch
        checked={onlyGoldJewels}
        onColor="rgba(199, 129, 0, 0.91)"
        onChange={e => {
          setOnlyGoldJewels(e);
        }}
      />
    </div>
  </div>
);

export default ProductsFilter;

ProductsFilter.defaultProps = {
  setOnlyGoldJewels: () => {},
  onlyGoldJewels: false,
  setSearchTerm: '',
  searchTerm: '',
};

ProductsFilter.propTypes = {
  setOnlyGoldJewels: PropTypes.func,
  onlyGoldJewels: PropTypes.bool,
  setSearchTerm: PropTypes.func,
  searchTerm: PropTypes.string,
};
