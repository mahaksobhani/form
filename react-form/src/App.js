import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main'
import SignUp from './components/SignUp';
import Login from './components/Login';

const App= ()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {<Route path="/" element={<Navigate to="/SignUp" />} />}
        
      </Routes>
    </div>
  );
}

export default App;
