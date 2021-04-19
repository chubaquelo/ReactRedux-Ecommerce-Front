// import axios from 'axios';

// const SERVER_URL = 'https://esteban-sergio-bookstore-app.herokuapp.com';

export const getProducts = () => ({
  type: 'GET_PRODUCTS',
  // HERE GOES THE ASYNC
  payload: category,
});


// dispatch => {
//   axios({
//     method: 'post',
//     url: `${SERVER_URL}/books`,
//     data: {
//       title: book.title,
//       author: book.author,
//       category_id: book.category,
//       progress: 0,
//     },
//     headers: {
//       Accept: 'application/json',
//       Authorization: authToken,
//     },
//   }).then(response => {
//     if (response) {
//       const categories = [
//         'All',
//         'Action',
//         'Biography',
//         'History',
//         'Horror',
//         'Kids',
//         'Learning',
//         'Sci-Fi',
//       ];
//       const modifiedBook = {
//         ...book,
//         id: response.data.id,
//         progress: '0',
//         category: {
//           id: book.category,
//           name: categories[book.category],
//         },
//       };
//       window.console.log(modifiedBook);
//       dispatch({
//         type: 'CREATE_USER_BOOK',
//         payload: modifiedBook,
//       });
//     }
//   }).catch(error => dispatch({ type: 'CREATE_USER_BOOK_ERROR', payload: error }));
