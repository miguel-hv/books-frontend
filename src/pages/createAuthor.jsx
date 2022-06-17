import { useState } from "react";
import { BASE_URL } from "../App";

const CreateAuthor = ({postAuthor}) => {
    // const [ author, setAuthor ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');

    const handleFormSubmit = ev => {
      ev.preventDefault();
      let author = {
        first_name: firstName,
        last_name: lastName,
      };
      postAuthor(author);    

      setFirstName('');
      setLastName('');
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