
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Signup from './components/Signup'
import Card from './components/Card'
import Home from './components/Home';

import PrivateComponent from './components/PrivateComponent';
function App() {

  const auth = localStorage.getItem('user');

  return (
      <div className="App">
        < BrowserRouter >
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<h1>Add product component </h1>} />
              <Route path="/update" element={<h1>update product component </h1>} />
              <Route path="/logout" element={<h1> Logout componenet </h1>} />
              <Route path="/profile" element={<h1> Profilecomponet</h1>} />
            </Route>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter >
      </div >
  );
}

export default App;
