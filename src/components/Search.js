import React, { useContext, useState } from 'react';
import './Search.css';

import Info from './Info';
import { SearchContext } from '../Contexts/SearchContext';

export default function Search() {
   
    const {setSearch,setShowSearch} = useContext(SearchContext);
    const [SearchText, setSearchText] = useState("");
    const showSearchClick = () => {  
        setSearch(SearchText)
        setShowSearch(true); 
      
    }
    return (
        <>
           
            <div className='hero__search'>
              <SearchContext.Provider value={{search, setSearch,setShowSearch}}>
                <div className='hero__search__form'>
                    <form>
                        <input type="text" label="search"  placeholder="What do yo u need ?" onChange={(e) => {
                            setSearchText(e.target.value) 
                        }} />
                        <button type="submit" className='site-btn' onClick={showSearchClick}>SEARCH</button>
                    </form>

                </div>
                </SearchContext.Provider>
                <Info />
            
            
                
            
            </div>
           





        </>

    )
}
