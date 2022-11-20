import Categorie from '../Categorie';

import Search from '../Search';
import Banner from './Elements/Banner';


function Home() {
    
    return (
        <>
            <div className='hero'>
                <div className='container'>
                    <div className='row'>
                        <Categorie />
                        <div className='col-lg-9'>
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
            <Banner/>

        </>
    )
}

export default Home