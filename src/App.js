import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
