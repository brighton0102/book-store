import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooksAsync } from '../redux/books/booksSlice';
import LoadingSpinner from './LoadingSpinner';
import BookItem from './BookItem';
import AddBookForm from './AddBookForm';

function BooksPage() {
  const dispatch = useDispatch();
  const app_id = 'AkLFJrpjuU37IPttnzZz';
  const books = useSelector(state => state.books.books);
  const isLoading = useSelector(state => state.books.isLoading)

  useEffect(() => {
    dispatch(fetchBooksAsync(app_id));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-spinner-container">
          <LoadingSpinner /> {/* Display the centered loading spinner */}
        </div>
      ) : (
        <div>
          {books.map((book, index) => (
            <div key={index}>
              <BookItem book={book} />
            </div>
          ))}
          <AddBookForm />
        </div>
      )};
    </div>
  );
}

export default BooksPage;
