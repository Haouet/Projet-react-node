import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
const baseURL = "http://localhost:5000/api/product/";
export default function Deatils() {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(baseURL + `${id}`);
                console.log(response.data);
                setData(response.data);

            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="product__details__pic">
                        <div className="product__details__pic__item">
                            <img  width={400} height={400} alt={data.title}  src={data.thumbnail}  />
                        </div>
                        <div className="product__details__pic__slider owl-carousel owl-loaded owl-drag">

                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                            <h3>{data.title}</h3>
                            <div className="product__details__rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <span>(18 reviews)</span>
                            </div>
                            <div className="product__details__price">${data.price}</div>
                            <p>{data.description}</p>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty"><span className="dec qtybtn">-</span>
                                        <input type="text" value="1" />
                                        <span className="inc qtybtn">+</span></div>
                                </div>
                            </div>
                            <a href="#" className="primary-btn">ADD TO CARD</a>
                       
                           
                        </div>
                    </div>

                
            </div>
        </div>
    )
}
