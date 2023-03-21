
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import formatCurrency from './formatCurrency';
export const CartTotal = () => {

    const cart = useSelector((state) => state.Card.Card);
    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.Qts
            totalPrice += item.price * item.Qts
        })
        return { totalPrice, totalQuantity }
    }

    return (

        <section className="shoping-cart spad">
            <div className="col-lg-12 ">
                <div className="shoping__checkout">
                    <h5>Cart Total</h5>
                    <ul>
                        <li>Total Qts <span>({getTotal().totalQuantity} )</span></li>
                        <li>Total <span>{formatCurrency(getTotal().totalPrice)}</span></li>
                        
                    </ul>
                    <button className="primary-btn" ><Link to={`/checkout`} >PROCEED TO CHECKOUT</Link></button>
                </div>
            </div>
        </section>

    )
}
