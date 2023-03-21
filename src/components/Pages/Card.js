import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { CartTotal } from './CartTotal';
export default function Card() {
    const Product = useSelector((state) => state.Card.Card);

    // const [loading, setLoading] = useState(false);
    const [data, setData] = useState(Product);
    console.log(Product);


    return (

        <section className="shoping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="shoping__cart__table">
                           
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                            <th></th>
                                        </tr>
                                    </thead> 
                                </table>
                                {(cart.length > 0) ? (
                                    
                                data?.map(item => (
                                    <CartItem key={item.id} {...item} />
                                ))
                                ):  'There is no item !'}
                        


                        </div>
                    </div>
                </div>


            </div>

            <div className="container"><CartTotal /></div>
        </section>



    )
}
