import { useState } from "react";
import { BASE_URL } from "../App";

let authorsArray = ["pepito", "pepita", "tiburcio"];

const CreateBook = () => {
    // const [ author, setAuthor ] = useState('');
    const [ name, setName ] = useState('');
    const [ isbn, setIsbn ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ authors, setAuthors ] = useState(authorsArray);
  
    const handleFormSubmit = ev => {
      ev.preventDefault();
      let book = {
        author: author,
        name: name,
        isbn: isbn,
      };

      try {
        fetch(BASE_URL+'/author', {
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

      setName('');
      setIsbn('');
      setAuthor('');
    }

    return(
        <div className="w-full max-w-xs">
            <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Author:  
                    </label>       
                    <div className="relative">
                        <select 
                        className=" appearance-none bg-white block w-full text-gray-700 text-sm font-bold mb-2 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow border leading-tight focus:outline-none focus:shadow-outline"
                        name="author"
                        defaultValue=""
                        >
                            {authors.map(el =>
                                <option key={el} value={el}>{el}</option>
                            )};
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>                
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Title:
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text"
                        placeholder="Title of the book"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    ISBN:
                    <input   
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text"
                        placeholder="ISBN"
                        name="isbn"
                        value={isbn}
                        onChange={e => setIsbn(e.target.value)}
                    />
                    </label>
                </div>
                
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit">
                    Send
                </button>
            </form>
        </div>
    );
};

export default CreateBook;