
import { Link } from "react-router-dom";
import './Product.css';
import { useDispatch } from 'react-redux';
import { addCard } from '../features/CardSlice';
import formatCurrency from './formatCurrency';
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


        
         
             
             <div class="card"  id={_id}>
                                 <div class="card-body">
                                     <div class="card-img-actions">
                                     <Link to={`/details/${_id}`} >
                                             <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80)" class="card-img img-fluid" width="96" height="350" alt="" />
                                           
                                             </Link> 

                                     </div>
                                 </div>

                                 <div class="card-body bg-light text-center">
                                     <div class="mb-2">
                                         <h6 class="font-weight-semibold mb-2">
                                         <Link to={`/details/${_id}`} >{title}</Link>
                                         </h6>

                                        <p>{description}</p>
                                     </div>

                                     <h3 class="mb-0 font-weight-semibold">{formatCurrency(price)}</h3>

                                     <div>
                                        <i class="fa fa-star star"></i>
                                        <i class="fa fa-star star"></i>
                                        <i class="fa fa-star star"></i>
                                        <i class="fa fa-star star"></i>
                                     </div>

                                     <div class="text-muted mb-3">34 reviews</div>

                                     <button type="button" class="btn bg-cart" onClick={handleCard}><i class="fa fa-cart-plus mr-2"></i> <Link to={`/card`} >
                            SHOP NOW </Link> 

                                   </button>

                                 </div>
             </div>


                         
       
       


    )
}
