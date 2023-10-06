import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function CategoriesPage() {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkStatus('Under construction'));
  }, [dispatch]);

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesPage;
