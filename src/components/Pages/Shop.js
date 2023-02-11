import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Search.css';
import Product from '../Product';

const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/product";
export default function Shop (){
    const [loading, setLoading] = useState(true);
   
    const [data, setData] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(baseURL);
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
    <> 
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                        <h1>All Products</h1>
                         </div>
                            <div className="col-lg-12">
                            {loading && <div> Loading </div>}
                            {!loading && (
                                <div className='wrapper'>
                                    {data.map(item => (
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

