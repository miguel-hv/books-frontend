import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Books, Navbar } from './components';
import { Authors } from './components';

const App = () => {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/authors" element={<Authors/>}/>
      </Routes>
    </Router>
  );
}

export default App;
