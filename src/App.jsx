import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' Component={LoginPage} />
        <Route exact path='/signup' Component={SignUpPage} />
      </Routes>
    </Router>
  );
}

export default App;
