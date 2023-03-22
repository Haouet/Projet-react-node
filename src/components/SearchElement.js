import React, { useState, useEffect  } from 'react'
const baseURL = "https://backend-ecommerce-exw7.onrender.com/api/product";
function SearchElement(Search) {
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