import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, NotFound } from './components';
import { Authors, Books, Author, Book, CreateAuthor, CreateBook } from './pages';

// export const BASE_URL = "http://localhost:4000"; 
export const BASE_URL = 'https://soamee-api.herokuapp.com';

const App = () => {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/authors" element={<Authors/>}/>
        <Route path="/book/:id" element={<Book/>}/>
        <Route path="/author/:id" element={<Author/>}/>
        <Route path="/author/add" element={<CreateAuthor/>}/>
        <Route path="/book/add" element={<CreateBook/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
