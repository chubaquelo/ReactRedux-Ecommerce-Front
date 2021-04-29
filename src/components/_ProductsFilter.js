import React from 'react';
import { DragSwitch } from 'react-dragswitch';
import PropTypes from 'prop-types';

const ProductsFilter = ({ onlyGoldJewels, setOnlyGoldJewels }) => (
  <>
    <DragSwitch
      checked={onlyGoldJewels}
      onColor="rgba(199, 129, 0, 0.91)"
      onChange={e => {
        setOnlyGoldJewels(e);
      }}
    />
  </>
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
