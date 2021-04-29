import { isAsyncThunkAction } from '@reduxjs/toolkit';
import productReducer from '../product';

describe('Products reducer methods works', () => {
  it('Gets products payload', () => {
    const action = {
      type: 'GET_PRODUCTS',
      payload: 'Is working!',
    }
    expect(productReducer([], action)).toEqual('Is working!');
  })

  it('Returns state by default', () => {
    const action = {
      type: 'UNEXISTENT_TYPE',
      payload: 'SOMETHING',
    };
    expect(productReducer([1, 2, 3], action)).toEqual([1, 2, 3]);
  });
});
