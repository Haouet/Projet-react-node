import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';
import Product from './Product';
import {useParams} from "react-router-dom";

const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/product/category/";
export default function ProductCat() {
    let {name} = useParams();
    console.log(name);
    const [loading, setLoading] = useState(true);   
    const [data, setData] = useState([]);
  
 
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            try {
                console.log("fetching")
                const { data: response } = await axios.get(`${baseURL}${name}`);
                console.log(response);
                setData(response);
               
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, [name]);  
   

  return (
    <> 
 
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                       <div className="section-title">
                      <h1> {name}</h1>                         
                         </div>
                            <div className="col-lg-12">
                            {loading && <div> Loading </div>}
                            {!loading && (
                                <div className='wrapper'>
                                    {data?.map(item => (
                                        <Product key={item._id} {...item} />
                                    ))}
                                </div>
                            )}
                            </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

