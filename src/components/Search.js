import React, { useState } from 'react';
import './Search.css';

import Info from './Info';
import { SearchContext } from '../Contexts/SearchContext';

export default function Search() {
    const {setSearch,setShowSearch} = useContext(SearchContext);
    const showSearchClick = () => {
      
        setShowSearch(true); 
      
    }

    // const [Search, setSearch] = useState("");
    
    

    return (
        <>

            <div className='hero__search'>
                <div className='hero__search__form'>
                    <form action="#">
                        <input type="text" label="search" placeholder="What do yo u need?" onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                        <button type="submit" className='site-btn' onClick={showSearchClick}>SEARCH</button>
                    </form>

                </div>
                <Info />
            
            
                
            
            </div>
           





        </>

    )
}
