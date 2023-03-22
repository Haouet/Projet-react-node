import React, { useState } from 'react';
import './Search.css';
import Slider from './Pages/Elements/Slider';
import Info from './Info';
import SearchElement from './SearchElement';

export default function Search() {


    const [Search, setSearch] = useState("");



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
                <Info />
            </div>
            <div>
                <Slider />
            </div>
            <SearchElement search={Search} />




        </>

    )
}
