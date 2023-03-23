import { SearchContext } from "../Contexts/SearchContext"
import Product from './Product';
import axios from 'axios';
import { useState, useEffect, useContext  } from "react";
const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/product";
function SearchElement() {
  const {search} = useContext(SearchContext);
  const [loading, setLoading] = useState(false);
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

    }, [search]);
  
       

  return (
    <div className="col-lg-12">


      {loading && <div> Loading </div>}
      {!loading && (
        <div className='wrapper'>
          {data?.filter((product) => product.title.toLowerCase().includes(search)).map(item => (
            <Product key={item._id} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchElement