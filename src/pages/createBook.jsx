import { useEffect, useState } from "react";
import { BASE_URL } from "../App";

let authorsArray = ["626f96222330bb8d0114d0b7", "626f96cb2330bb8d0114d0bb", "tiburcio"];

const CreateBook = () => {
    const [ title, setTitle ] = useState('');
    const [ isbn, setIsbn ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ authorsList, setAuthorsList ] = useState([]);

    useEffect(() => {
        fetch(BASE_URL+'/authors')
        .then((res) => res.json())
        .then((res) => {
            setAuthorsList(res);
        })
        .catch((error) => {
        });  
    }, []);

    console.log(authorsList);

    
  
    const handleFormSubmit = ev => {
      ev.preventDefault();
      let book = {
        author: author,
        name: title,
        isbn: isbn,
      };

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

      setTitle('');
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
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        >
                            {authorsList.map(el =>
                                <option key={el._id} value={el._id}>{el.first_name} {el.last_name}</option>
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
                        value={title}
                        onChange={e => setTitle(e.target.value)}
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