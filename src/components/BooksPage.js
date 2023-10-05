import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddBookForm from './AddBookForm';

function BooksPage() {
  const books = useSelector(state => state.books);

  return (
    <div>
      {books.map(book => (
        <div key={book.item_id}>
          <BookItem book={book} />
        </div>
      ))}

      <AddBookForm />
    </div>
  );
}

export default BooksPage;
