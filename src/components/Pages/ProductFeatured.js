import React, { useState, useEffect  } from 'react'
import Product from '../Product'
const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/product";
import axios from 'axios';
function ProductFeatured() {
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
    <div className="col-lg-12">

               
    <div class="section-title">
           <h2>Featured Product</h2>
       </div>
               {loading && <div> Loading </div>}
               {!loading && (
                   <div className='wrapper'>
                       {data.map(item => (
                           <Product key={item._id} {...item} />
                       ))}
                   </div>
               )}


           </div>
  )
}

export default ProductFeatured