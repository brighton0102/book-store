import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function BookItem({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.item_id));
  }

  return (
    <div>
      <p>Tile: { book.title }</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <button onClick={handleRemoveBook}>Remove Book</button>
    </div>
  );
}

export default BookItem;
