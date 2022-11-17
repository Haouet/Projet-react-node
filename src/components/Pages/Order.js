
import { useSelector } from 'react-redux';
export default function Order({}) {
    const cart = useSelector((state) => state.Card.Card);
    // const getTotal = () => {
    //     let totalQuantity = 0
    //     let totalPrice = 0
    //     cart.forEach(item => {
    //         totalQuantity += item.Qts
    //         totalPrice += item.price * item.Qts
    //     })
    //     return { totalPrice, totalQuantity }
    // }

    var totalQuantity = 0
    var totalPrice = 0
    var total = 0;
    const itemList = (item) => {
      total = total + item.price; 
      totalQuantity = item.Qts;
      totalPrice += item.price * item.Qts
return (
    <div>
        <li >       
       {item.title}   
       <span>${item.price}</span>
       <span>{item.Qts}</span>
        </li>
         
          </div> 
      );
    }
  return (
                <div class="col-lg-4 col-md-6">
                            <div class="checkout__order">
                                <h4>Your Order</h4>
                                <div class="checkout__order__products">Products<span>Total</span></div>
                                <ul>
                                {cart.map(itemList)}
                                </ul>
                                <div class="checkout__order__total">Total {totalPrice}  <span>${totalPrice}</span></div>
                                <div class="checkout__input__checkbox">
                                    <label for="acc-or">
                                        Create an account?
                                        <input type="checkbox" id="acc-or"/>
                                        <span class="checkmark"/>
                                    </label>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                                <div class="checkout__input__checkbox">
                                    <label for="payment">
                                        Check Payment
                                        <input type="checkbox" id="payment"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                             
                                <button type="submit" class="site-btn">PLACE ORDER</button>
                            </div>
                        </div>
  )
}
