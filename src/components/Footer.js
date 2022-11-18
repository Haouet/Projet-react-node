import {useRef} from 'react';
import { Link } from "react-router-dom";
import Logo from './logo.png';
import {useState} from 'react';
export default function Footer() {
    const inputRef = useRef(null);
    const [email,setEmail] = useState('');
    const  handleClick = (event) => {
        setEmail(inputRef.current.value);    
        console.log('value is:', email);
      };
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                            </div>
                            <ul>
                                <li>Address: Carthage Byrsa Tunis, Tunisia</li>
                                <li>Phone: +216 52.928.451</li>
                                <li>Email: taherhaouet@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div className="footer__widget">
                            <h6>Useful Links</h6>
                            <ul>
                                <li> <Link to="/about" className="nav-link">About Us</Link></li>
                                <li> <Link to={`/shop`} className="nav-link"> SHOP </Link></li>
                                <li><Link to="/contact" className="nav-link" >Contact Us</Link></li>
                             
                            </ul>
                            <ul>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer__widget">
                            <h6>Join Our Newsletter Now</h6>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action='#'>
                                <input type="text" ref={inputRef} placeholder="Enter your mail" name="email" />
                                <button type="submit" className="site-btn" onClick={handleClick} >Subscribe</button>
                            </form>
                          
                            <div className="footer__widget__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text">
                                <p>
                                Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved
                                <i className="fa fa-heart" aria-hidden="true"></i> by Taher Haouet
                            </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
