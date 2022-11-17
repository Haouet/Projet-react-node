
import { Link } from "react-router-dom";
import './Product.css';
import { useDispatch } from 'react-redux';
import { addCard } from '../features/CardSlice';

export default function Product({ _id, title, price, description, images
    , thumbnail, stock }) {

    const dispatch = useDispatch();


    const handleCard = (e) => {
        e.preventDefault();
        dispatch(addCard(
            {
                id: _id,
                title: title,
                price: price,
                Qts: 1

            }
        )
        )
    }



    return (

        <div className='row featured__filter' id={_id} >
            <div className='' >
                <div className=''>
                    <Link to={`/details/${_id}`} >
                        <div className='featured__item__pic set-bg' data-setbg={thumbnail
                        } style={{ backgroundImage: `url(${images[0]})` }} >

                        </div></Link>
                    <div className='featured__item__text'>
                        <h6><Link to={`/details/${_id}`} >{title}</Link></h6>
                        <p>{description}</p>
                        <h5>${price}</h5>
                        <h6>In stock :{stock}</h6>

                        <button className="primary-btn" onClick={handleCard}><Link to={`/card`} >
                            SHOP NOW </Link> </button>

                    </div>
                   


                </div>
            </div>

        </div>

    )
}
