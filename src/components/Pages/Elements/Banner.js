import React from 'react'
import banner from './img/banner-1.jpg';
import banner_2 from './img/banner-2.jpg';
function Banner() {
 
  return (
    <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                         <img src={banner} alt="banner 1" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                    <img src={banner_2} alt="banner 2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner