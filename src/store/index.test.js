import store from './index';

describe('The store object', () => {
  it('should validate Redux store object', () => {
    expect(store).toBeTruthy();
    expect(typeof store.dispatch).toBe('function');
  });
});
