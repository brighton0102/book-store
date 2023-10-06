import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/booksSlice'

function AddBookForm() {
  const dispatch = useDispatch();
  const app_id = 'AkLFJrpjuU37IPttnzZz'
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

    const handleAddBook = async () => {
        console.log('Adding book...');
    const newBook = {
      item_id: uuidv4(), 
      title,
      author,
      category: 'Fiction', 
    };
    console.log('New Book:', newBook);
    await dispatch(addBookAsync({ app_id, book: newBook }));
    console.log('Book added successfully')
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default AddBookForm;