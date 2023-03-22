import React, { useState } from 'react';
import './Search.css';
import Product from './Product';
import Info from './Info';

import axios from 'axios';
const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/product";
export default function Search() {


    const [Search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    
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


    

    return (
        <>

            <div className='hero__search'>
                <div className='hero__search__form'>
                    <form action="#">
                        <input type="text" label="search" placeholder="What do yo u need?" onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                        <button type="submit" className='site-btn' onClick={fetchData}>SEARCH</button>
                    </form>

                </div>
                <Info />
            
            
                
            
            </div>
            <div className="col-lg-12">
            {loading && <div> Loading </div>}
                                {!loading   &&  (
                                     <div className='wrapper'>
            {data?.filter((product) => product.title.toLowerCase().includes(Search)).map(item => (
                                <Product key={item._id} {...item} />
                            ))}
                            </div>
                            )}
            </div>




        </>

    )
}
