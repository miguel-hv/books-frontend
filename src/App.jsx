import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Authors, Books, Author, Book, CreateAuthor, CreateBook } from './pages';
import { useState } from 'react';

// export const BASE_URL = "http://localhost:4000"; 
export const BASE_URL = 'https://soamee-api.herokuapp.com';

const App = () => {

  const [ authorsList, setAuthorsList ] = useState([]);
  const [ booksList, setBooksList ] = useState([]);

  const getAuthors = () => {
    fetch(BASE_URL+'/authors')
    .then((res) => res.json())
    .then((res) => {
        setAuthorsList(res);
    })
    .catch((error) => {
    }); 
  }

  const getBooks = () => {
    fetch(BASE_URL+'/books')
    .then((res) => res.json())
    .then((res) => {
        setBooksList(res);
    })
    .catch((error) => {
    });  
  }

  const postAuthor = (author) => {
    try {
        fetch(BASE_URL+'/author', {
            method: 'POST',
            headers: {
            //    'Accept': 'application/json',
               'Content-Type': 'application/json',
            //    'Access-Control-Allow-Origin': '*' // CORS
            },
            // credentials: 'include',        
            body: JSON.stringify(author)
        })
        .then(response => {console.log(response); return response.json();});
        console.log(author);
        console.log(JSON.stringify(author));
     } catch (error) {
         console.log('error post');
     }
  }

  const postBook = (book) => {
    try {
      fetch(BASE_URL+'/book', {
          method: 'POST',
          headers: {
          //    'Accept': 'application/json',
             'Content-Type': 'application/json',
          //    'Access-Control-Allow-Origin': '*' // CORS
          },
          // credentials: 'include',        
          body: JSON.stringify(book),
      })
      .then(response => {console.log(response); return response.json();});
      console.log(book);
      console.log(JSON.stringify(book));
   } catch (error) {
       console.log('error post');
   }
  }

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Books getBooks={getBooks} booksList={booksList}/>}/>
        <Route path="/authors" element={<Authors getAuthors={getAuthors} authorsList={authorsList}/>}/>
        <Route path="/book/:id" element={<Book/>}/>
        <Route path="/author/:id" element={<Author/>}/>
        <Route path="/author/add" element={<CreateAuthor postAuthor={postAuthor}/>}/>
        <Route path="/book/add" element={<CreateBook postBook={postBook} getAuthors={getAuthors} authorsList={authorsList}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
