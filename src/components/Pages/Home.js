import React, { useState, useEffect  } from 'react'
import Categorie from '../Categorie';
import Slider from './Elements/Slider';
import Search from '../Search';
import Banner from './Elements/Banner';
import SearchElement from '../SearchElement';
import { SearchContext } from '../../Contexts/SearchContext';
import ProductFeatured from './ProductFeatured';


function Home() {
 

    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("");
    console.log(showSearch);
    console.log(search);
   
    return (
        <>
            <div className='hero'>
                <div className='container'>
                    <div className='row'>
                        <Categorie />
                        <div className='col-lg-9'>   
                        <Search/>   
                        <br/>                      
                        <Slider />
                        </div>
                       
                     </div>
                </div>
             </div>
            <div className='container'>
            <SearchContext.Provider value={{search, setSearch,setShowSearch}}>
            { !showSearch
            ? (<SearchElement/> ) 
            : (
                <ProductFeatured/>
              )}
            </SearchContext.Provider>
              
            </div>                      
            <br/>
                
            <div className='container'>
            <Banner/> 
            </div>
            <br/>

        </>
    )
}

export default Home