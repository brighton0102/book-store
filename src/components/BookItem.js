import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';
import './BookItem.css';

function BookItem({ book }) {
  console.log('BookItem received book:', book);
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    const app_id = 'AkLFJrpjuU37IPttnzZz'
    await dispatch(removeBookAsync({ app_id, item_id: book.item_id }));
  };

  return (
    <div className="book-item">
      <div className="book-details">
       <div>
       <p className="category">{book.category}</p>
       <h3 className="title">{book.title}</h3>
       <p className="author">{book.author}</p>
      </div> 
      <div className="actions">
      <button className="action-button">Comments</button>  
      <button className="remove-button" onClick={handleRemoveBook}>Remove Book</button>
      <button className="action-button">Edit</button>
      </div>
      </div>
      <div className="flex-content">
        <div className="specify">
          <div className="loading-spinner2"></div>
          <div className="progress">
            <p className="percent">34%</p>
            <p className="complete">Completed</p>
          </div>
        </div>
        <div className="block">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 12</p>
        <button className="update">UPDATE PROGRESS</button>
        </div>
        </div>
    </div>
  );
}

export default BookItem;
