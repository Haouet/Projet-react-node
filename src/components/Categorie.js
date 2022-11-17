import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Cat.css';
import ListCat from './ListCat';
// import ListCat from './ListCat';
const baseURL = "http://localhost:5000/api/cat/";
export default function Categorie() {
  const [loading, setLoading] = useState(true);
  const [listCategory, setListCategory] = useState([]);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(baseURL);
        // console.log(response.data);
        setListCategory(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  
  function handleFilter() { 
    
    setFiltered(!filtered)
    
  }
  return (
    
      <div className='col-lg-3'>
        <div className='hero__categories'>
          <div className='hero__categories'>
            <div className='hero__categories__all' onClick={handleFilter}>
             <i className="fa fa-bars"> </i>
             <span> All departments </span>
            </div>
            <div className='hero__categories'>
              {loading && <div>Loading</div>}
              {!loading &&  !filtered && (
                 <div>
                  {listCategory.map(item => (
                  <ListCat key={item._id} {...item}/>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    
  )
}
