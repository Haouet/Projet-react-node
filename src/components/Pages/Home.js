import Categorie from '../Categorie';

import Search from '../Search';
import SearchElement from '../SearchElement';
import Category from './Category';
import Banner from './Elements/Banner';


function Home() {
    
    return (
        <>
            <div className='hero'>
                <div className='container'>
                    <div className='row'>
                        <Categorie />
                        <div className='col-lg-9'>                            
                            <SearchElement />
                            </div>
                            <div>

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
                            
                        </div>
                    </div>
                </div>
            </div>
            <Banner/>
            <br/>

        </>
    )
}

export default Home