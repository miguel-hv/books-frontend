import './App.css';
import { useState, useEffect } from "react";


const INITIAL_STATE =  [
    {
      name : "The wonder down under",
      isbn: "978-1-68144-021-7",
      author: [],
    },    
];


const App = () => {

  const [ booksList, setBooksList ] = useState(INITIAL_STATE);
  
  useEffect(() => {
    fetch('http://localhost:3001/books')
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        setBooksList(res);
    })
    .catch((error) => {
       console.log(error)
    });  
    
  }, []);



  return (
    <div>        
      {booksList.map(e => (
        <li key={e.isbn}>
          <p>{e.name}</p>
          <p>{e.author}</p>
          <p>{e.isbn}</p>
        </li>
      ))} 
    </div>
  );
}

export default App;
