import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AddStudent from './components/AddStudent';
import StudentDetails from './components/StudentDetails';
import SspDetails from './components/Sspdetails';
import UpdateDetails from './components/UpdateDetails';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    console.log(username);
   
    if (username === 'admin' && password === 'password') {
     
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <Router>
      { isAuthenticated ?
        <Routes>
          <Route path="/" element={<AddStudent />} />
          <Route path="/students/:rollNumber/:academicYear" element={<StudentDetails />} />
          <Route path="/ssp/:rollNumber" element={<SspDetails />} />
        </Routes>
        :
        <Login 
          handleLogin={handleLogin}
          setUsername={setUsername}
          setPassword={setPassword}
         
        />
      }
      { isAuthenticated &&
        <button onClick={handleLogout} style={{left:"2000px",position:"relative",bottom:"320px",fontSize:"20px",fontWeight:"bold"}}>Logout</button>
      }
    </Router>
  );
}
export default App;
