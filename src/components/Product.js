
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
        <div className="card">
            <div className="card-body">
                <div className="card-img-actions">
                    <Link to={`/details/${_id}`} >
                        <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80)" className="card-img img-fluid" width="96" height="350" alt="" />

                    </Link>

                </div>
            </div>

            <div className="card-body bg-light text-center">
                <div className="mb-2">
                    <h5 className="font-weight-semibold mb-2">
                        <Link to={`/details/${_id}`} >{title}</Link>
                    </h5>

                    <p>{description}</p>
                </div>

                <h3 className="mb-0 font-weight-semibold">{formatCurrency(price)}</h3>

                <div>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                </div>

                <div className="text-muted mb-3">34 reviews</div>

                <button type="button" className="btn bg-cart" onClick={handleCard}><i className="fa fa-cart-plus mr-2"></i> <Link to={`/card`} >
                    SHOP NOW </Link>

                </button>

            </div>


            <div class="col-lg-4">
                                    <div class="product__discount__item">
                                        <div class="product__discount__item__pic set-bg"
                                            data-setbg="img/product/discount/pd-2.jpg">
                                            <div class="product__discount__percent">-20%</div>
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__discount__item__text">
                                            <span>Vegetables</span>
                                            <h5><a href="#">Vegetables’package</a></h5>
                                            <div class="product__item__price">$30.00 <span>$36.00</span></div>
                                        </div>
                                    </div>
                                </div>
        </div>

    )
}
