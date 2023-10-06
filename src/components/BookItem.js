import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';

function BookItem({ book }) {
  console.log('BookItem received book:', book);
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    const app_id = 'AkLFJrpjuU37IPttnzZz'
    await dispatch(removeBookAsync({ app_id, item_id: book.item_id }));
  };

  return (
    <div>
      <p>Title: { book.title }</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <button onClick={handleRemoveBook}>Remove Book</button>
    </div>
  );
}

export default BookItem;
