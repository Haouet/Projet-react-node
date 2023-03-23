import React, { useState, useEffect } from 'react'
import Categorie from '../Categorie';
import Slider from './Elements/Slider';
import Banner from './Elements/Banner';
import ProductFeatured from './ProductFeatured';
import '../Search.css';
import Info from '../Info';
import Product from '../Product';
import axios from 'axios';

const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/product";
function Home() {
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("");
    console.log(showSearch);
    console.log(search);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowSearch(true);

    }
    const fetchData = async () => {
        setLoading(true);
        try {
            const { data: response } = await axios.get(baseURL);
            setData(response.data);

        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);
    }


    return (
        <>
            <div className='hero'>
                <div className='container'>

                    <div className='row'>
                        <Categorie />
                        <div className='col-lg-9'>
                        <div className='col-lg-6'>
                            <div className='hero__search'>
                                <div className='hero__search__form'>
                                    <form onSubmit={handleSubmit}>
                                        <input type="text" label="search" value={search} placeholder="What do yo u need ?" onChange={(e) => {
                                            setSearch(e.target.value)
                                        }} />
                                        <button type="submit" className='site-btn' >SEARCH</button>
                                    </form>
                                </div>

                            </div>
                            </div>
                            <div className='col-lg-3'>
                                <Info />
                            </div>                      
                       
                            <Slider />
                        </div>

                    </div>
                </div>
            </div>
            <div className='container'>

                {showSearch
                    ? (

                        (data.length > 0) ? (

                            <div className='wrapper'>
                                {data?.filter((product) => product.title.toLowerCase().includes(search)).map(item => (
                                    <Product key={item._id} {...item} />
                                ))}
                            </div>


                        ) : `Product is no  existe  ! ${search}  `

                    )
                    : (
                        <ProductFeatured />
                    )
                }


            </div>
            <br />

            <div className='container'>
                <Banner />
            </div>
            <br />

        </>
    )
}

export default Home