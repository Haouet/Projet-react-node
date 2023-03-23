import React from 'react'
import { useSelector } from "react-redux";

export default function () {
  const Product = useSelector((state) => state.Card.Card);
  const items = (Product.length )
  return (
    <>  <div className='header__cart' >
          <ul>
             <li className="nav-item" > <Link to="/card"> <i className='fa fa-shopping-bag' />
            </Link>
            </li>
            <li className="nav-item" >
              <span style={{
                width: "1.5rem",
                height: "1.5rem",
                right: 0,

              }}>item:: {items}</span> </li>

          </ul>

    </div>
      <div className="hero__search__phone">
        <div className="hero__search__phone__icon">
          <i className="fa fa-phone"></i>
        </div>
        <div className="hero__search__phone__text">
          <h5>+216 52 928 451 </h5>
          <span>support 24/7 time</span>
        </div>
      </div>
    </>
  )
}
