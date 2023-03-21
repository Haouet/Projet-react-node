import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png';
import './Header.css';
import { useSelector } from "react-redux";

export default function Header() {
  const Product = useSelector((state) => state.Card.Card);
  const items = (Product.length )
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
          <div className='col-lg-3'>
            <div className='header__cart' >
              <ul>
                
                <li className="nav-item" >
                  
                  <Link to="/card"> <i className='fa fa-shopping-bag' style={{position: "relative"}} /> <div 
                  className="rounded-circle bg-danger 
                  d-flex justify-center align-item-center"
                  style={{
                    position: "absolute",
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%,25% )"

                  }}>{items}</div> </Link>
                 
                  </li>
              </ul>

            </div>
          </div>
        </Container>
      </Navbar>

     
    </>
  )
}
