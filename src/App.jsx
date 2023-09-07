import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import EditUser from './Users/EditUser';
import PostCreation from './pages/PostCreation';
import SelectionPage from './pages/SelectionPage';
import AgileBoard from './pages/AgileBoard';
import ProfilePage from './pages/ProfilePage';
import EditPostCreation from './pages/EditPostPage';
import ChatPage from './pages/ChatPage';

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
        <Route 
          exact path='/agileboardcreation' 
          Component={AgileBoard} 
        />
        <Route 
          exact path='/profilepage/:id' 
          Component={ProfilePage} 
        />
        <Route 
          exact path='/editpostcreation/:projectId' 
          Component={EditPostCreation} 
        />
        <Route 
          exact path='/chatpage' 
          Component={ChatPage} 
        />
      </Routes>
    </Router>
  );
}

export default App;
