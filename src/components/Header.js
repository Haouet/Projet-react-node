import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png';
import './Header.css';

import Info from "./Info";

export default function Header() {

  return (
    <>
      <Navbar bg="white" variant="light">
        <Container>
          <div className='col-lg-3'>
          <Link to={`/`} className="nav-link"><img src={Logo} alt="BigCo Inc. logo" /></Link> 
          </div>
          <div className='col-lg-6'>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                <Link to={`/`} className="nav-link"> Home </Link>
                </li>
                <li className ="nav-item">
                <Link to={`/shop`} className="nav-link"> SHOP </Link>
                </li>
                <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">                  
                  <Link to="/contact" className="nav-link" >Contact Us </Link>
                </li>                
              </ul>
            </div>
          </div>
          <div className='col-lg-3'><Info /></div>
          
        </Container>
      </Navbar>

     
    </>
  )
}
