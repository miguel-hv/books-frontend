import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Books } from './components';

const App = () => {

  return (
    <Router>
    {/* navbar */}
      <Routes>
        <Route path="/" element={<Books/>}/>
      </Routes>
    </Router>
  );
}

export default App;
