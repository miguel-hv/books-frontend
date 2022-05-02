import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Authors, Books, Author, Book } from './pages';

// export const BASE_URL = "http://localhost:3001"; 
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
      </Routes>
    </Router>
  );
}

export default App;
