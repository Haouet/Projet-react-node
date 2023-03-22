import React, { useState, useEffect  } from 'react'
import Categorie from '../Categorie';
import axios from 'axios';

import Search from '../Search';
import SearchElement from '../SearchElement';

import Banner from './Elements/Banner';
import Product from '../Product';
const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/product";

function Home() {
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
            <div className='hero'>
                <div className='container'>
                    <div className='row'>
                        <Categorie />
                        <div className='col-lg-9'>   
                        <Search/>                         
                           
                        </div>
                     <div>
                </div>
            <section className="col-lg-12">
            {loading && <div> Loading </div>}
                            <SearchElement />
                
                <div class="row">
                        <div class="col-md-4 mt-2">                       
                                
                                {!loading   &&  (
                                    <div className='wrapper'>                                                                            
                                        {data?.map(item => (
                                            <Product key={item._id} {...item} />
                                        ))}
                                    </div>
                                )}
                               
                        </div>
                    </div>
               
            </section>
                            
                        </div>
                    </div>
                
            </div>
            <Banner/>
            <br/>

        </>
    )
}

export default Home