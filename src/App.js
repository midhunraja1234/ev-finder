import React from 'react';
import Login from './Login';
import Book from './Book';
import Admin from './Admin';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';  
function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/book' element={<Book/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
