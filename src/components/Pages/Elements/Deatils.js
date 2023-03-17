import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useParams,Link  } from "react-router-dom";
import { addCard } from '../../../features/CardSlice';
const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/";

export default function Deatils() {
       const dispatch = useDispatch();
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
    const handleCard = (e) => {
        e.preventDefault();
        dispatch(addCard(
            {
                id: data._id,
                title: data.title,
                price: data.price,
                Qts: 1

            }
        )
        )
    }
    

    return (
        <section className='product-details spad'>
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="product__details__pic">
                        <div className="product__details__pic__item">
                            <img  width={400} height={400} alt={data.title}  src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"  />
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
                           
                            <button className="primary-btn" onClick={handleCard}><Link to={`/card`} >
                            SHOP NOW </Link> </button>
                       
                           
                        </div>
                    </div>   
            </div>
        </div>
        </section>
    )
}
