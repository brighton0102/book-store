import React from 'react';

function BookItem({ book, onDeleteBook }) {
  return (
    <li>
      <p>
        Title:
        {book.title}
      </p>
      <p>
        Author:
        {book.author}
      </p>
      <button onClick={() => onDeleteBook(book.id)}>Delete</button>
    </li>
  );
}

export default BookItem;
