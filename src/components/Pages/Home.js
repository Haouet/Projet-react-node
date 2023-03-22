import Categorie from '../Categorie';
import React, { useState, useEffect  } from 'react'
import axios from 'axios';
import Search from '../Search';
import SearchElement from '../SearchElement';
import Category from './Category';
import Banner from './Elements/Banner';
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
                            <SearchElement />
                            </div>
                            <div>

                            <section className="col-lg-12">
                
                <div class="row">
                        <div class="col-md-4 mt-2">                       
                                {loading && <div> Loading </div>}
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
            </div>
            <Banner/>
            <br/>

        </>
    )
}

export default Home