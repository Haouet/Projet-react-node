import React, { useState, useEffect  } from 'react'
import axios from 'axios';
import Product from './Product';
const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/product";
function SearchElement({data}) {
    
  return (
    <section className="col-lg-12">
                
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
   
</section>
  )
}

export default SearchElement