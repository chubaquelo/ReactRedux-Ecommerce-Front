import axios from 'axios';

const SERVER_URL = 'https://esteban-sergio-bookstore-app.herokuapp.com';

const getProducts = () => dispatch => {
  axios({
    method: 'get',
    url: `${SERVER_URL}/products`,
    headers: {
      Accept: 'application/json',
    },
  }).then(response => {
    if (response) {
      dispatch(
        {
          type: 'GET_PRODUCTS',
          payload: response.data,
        },
      );
    }
  }).catch(error => (
    {
      type: 'GET_PRODUCTS_ERROR',
      payload: error,
    }
  ));
};

export default getProducts;
