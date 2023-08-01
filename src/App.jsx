import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import EditUser from './Users/EditUser';
import PostCreation from './pages/PostCreation';
import SelectionPage from './pages/SelectionPage';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route 
          exact path='/' 
          Component={LoginPage} 
        />
        <Route 
          exact path='/homepage' 
          Component={HomePage} 
        />
        <Route 
          exact path='/signup' 
          Component={SignUpPage} 
        />
        <Route 
          exact path='/adminpage' 
          Component={AdminPage} 
        />
        <Route 
          exact path='/edituser/:id' 
          Component={EditUser} 
        />
        <Route 
          exact path='/postcreation' 
          Component={PostCreation} 
        />
        <Route 
          exact path='/selectionpage' 
          Component={SelectionPage} 
        />
      </Routes>
    </Router>
  );
}

export default App;
