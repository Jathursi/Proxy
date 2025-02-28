import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import ForgetPassword from './pages/ForgetPassword/Forgetpassword';


function App() {
  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
             
              <span className='mx-2 text-light lh-1 fw-semibold'>
                Squid
                <br></br>
                Proxy
                <br></br>
                Control
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/login' className='text-uppercase'>Login</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
