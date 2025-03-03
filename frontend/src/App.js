import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Signup from './pages/Signup/Signup';
import Dashboard from './Components/Dashboard'
// import Dashboard from './pages/Dashboard/Dashboard';
import ForgetPassword from './pages/ForgetPassword/Forgetpassword';
import Topbar from './Topbar';
import BlockedList from './Components/BlockedList';
import Docker from './Components/Docker';
import Proxy from './Components/Proxy';
import Main from './Components/Main';
import { Navigate } from 'react-router-dom';
import HomeMain from './pages/HomeMain';
function App() {
  return (
    <div className='flex flex-col App min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Navigate to="home" replace />}/>
            <Route path='login' element={<Login />} />
            <Route path='contact' element={<Contact />} />
            <Route path='signup' element={<Signup />} />
            <Route path='home' element={<HomeMain />} />
          </Route>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<Navigate to="main" replace />}/>
            <Route path='main' element={<Main/>}/>
            <Route path='blockedlist' element={<BlockedList/>}/>
            <Route path='docker' element={<Docker/>}/>
            <Route path='proxy' element={<Proxy/>}/>
          </Route>
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
    </div>
  );
}

export default App;
