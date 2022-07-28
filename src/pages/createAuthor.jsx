import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";

const CreateAuthor = () => {
    const { state: authorToEdit } = useLocation();
    console.log(authorToEdit);

    const [ firstName, setFirstName ] = useState(authorToEdit ? authorToEdit.first_name : '');
    const [ lastName, setLastName ] = useState(authorToEdit ? authorToEdit.last_name : '');
  
    const navigate = useNavigate();


    const handleFormSubmit = ev => {
      ev.preventDefault();

    if ( authorToEdit && Object.keys(authorToEdit).length ) {

        fetch(BASE_URL+'/author/'+authorToEdit._id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                _id: authorToEdit._id,
                first_name: firstName,
                last_name: lastName,
            }
            )
        })
            .then(response => response.json())
            .then(navigate("/authors", { replace: true }))
            .catch((error) => {
                console.log(error)
                });      

      } else {
            let author = {
                first_name: firstName,
                last_name: lastName,
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
                    body: JSON.stringify(author)
                })
                .then(response => response.json());
                navigate("/authors", { replace: true });
                
                // console.log(author);
                // console.log(JSON.stringify(author));
            } catch (error) {
                console.log('error post');
            }

            setFirstName('');
            setLastName('');
        }
    }

    return(
        <div className="w-full max-w-xs">
            <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name:
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name:
                    <input   
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
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

export default CreateAuthor;