import React from 'react'
import { Link } from 'react-router-dom';
import Img from './img/banner.jpg';
export default function Slider() {
    return (
        <div>
            <div className="hero__item set-bg" data-setbg={ {Img}} >
                <div className="hero__text">
                    <span>FRUIT FRESH</span>
                    <h2>Vegetable 100% Organic</h2>
                    <p>Free Pickup and Delivery Available</p>
                    <Link to={`/shop`} className="primary-btn">SHOP NOW</Link>
                </div>
            </div>
        </div>
    )
}
