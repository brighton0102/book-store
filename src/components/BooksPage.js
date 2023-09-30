import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import Navigation from './Navigation';

function BooksPage() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <Navigation />
      {' '}
      {/* Display navigation links */}
      <BookList books={books} onDeleteBook={handleDeleteBook} />
      {' '}
      {/* Display book list */}
      <BookForm onAddBook={handleAddBook} />
      {' '}
      {/* Display book form */}
    </div>
  );
}

export default BooksPage;
