import React from 'react';
import { DragSwitch } from 'react-dragswitch';
import PropTypes from 'prop-types';

const ProductsFilter = ({ onlyGoldJewels, setOnlyGoldJewels }) => (
  <div className="w-1/2 flex justify-between items-center">
    <label htmlFor="search-box" className="italic text-gray-600">
      Search by Name:
      <input
        name="search-box"
        type="text"
        className="ml-4 h-11 border p-4 text-gray-700 text-xl rounded-md"
      />
    </label>
    <div>
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
};

ProductsFilter.propTypes = {
  setOnlyGoldJewels: PropTypes.func,
  onlyGoldJewels: PropTypes.bool,
};
