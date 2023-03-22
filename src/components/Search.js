import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './Search.css';
import Product from './Product';
import Slider from './Pages/Elements/Slider';
import Info from './Info';
const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/product";
export default function Search() {
   
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [Search, setSearch] = useState("");
   
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
           
        <div className='hero__search'>
            <div className='hero__search__form'>
                <form action="#">
                    <input type="text" label="search" placeholder="What do yo u need?" onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
                    <button type="submit" className='site-btn'>SEARCH</button>
                </form>

            </div>
            <Info/>
            </div>
            <Slider />            
            <section className="col-lg-12">
                <div className="">
                <div class="row">
                        <div class="col-md-4 mt-2">                       
                                {loading && <div> Loading </div>}
                                {!loading   &&  (
                                    <div className='wrapper'>                                                                            
                                        {data?.filter((product) => product.title.toLowerCase().includes(Search)).map(item => (
                                            <Product key={item._id} {...item} />
                                        ))}
                                    </div>
                                )}
                               
                        </div>
                    </div>
                </div>
            </section>



        </>

    )
}
