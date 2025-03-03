import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Signup from './pages/Signup/Signup';
import Dashboard from './Components/Dashboard'
// import Dashboard from './pages/Dashboard/Dashboard';
import ForgetPassword from './pages/ForgetPassword/Forgetpassword';
import Topbar from './Topbar';

function App() {
  return (
    <div className='flex flex-col App min-h-screen'>
      <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
    </div>
  );
}

export default App;
