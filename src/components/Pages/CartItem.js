import { removeItem, decrementQuantity, incrementQuantity } from '../../features/CardSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

function CartItem({ id, title, price}) {
    const cart = useSelector((state) => state.Card.Card);
    
    const [Qts, setQts] = useState('1');
    // console.log(id);

    const dispatch = useDispatch();

    const onClickIncrease = (e) => {
        //   console.log(Qts);
        e.stopPropagation();
        // setQts(Qts + 1);

        dispatch(incrementQuantity(id))
    }
    const onClickDecrease = (e) => {
        e.stopPropagation();
        // setQts(Qts - 1);
        dispatch(decrementQuantity(id, Qts))
    }
    const Remove = () => {
        dispatch(removeItem(id))
    };


    // const handleChange = (e) => {
    //     setQts({ value: e.target.value });
    // }
    return (

        <>
        
            <table>
                <tbody>
                    <tr>
                        <td className="shoping__cart__item">

                            <h5 >{title}</h5>
                        </td>
                        <td className="shoping__cart__price">
                            ${price}
                        </td>
                        <td className="shoping__cart__quantity">
                            <div className="quantity">
                                <div className="pro-qty">
                                    <span className="dec qtybtn" onClick={onClickDecrease} >-</span>
                                    <input type="text" value={Qts} onChange={(e) => {
                                    setQts(e.target.value)
                                }}/>
                                    <span className="inc qtybtn" onClick={onClickIncrease}>+</span></div>
                            </div>
                        </td>
                        <td className="shoping__cart__item__close">
                            <span className="icon_close"></span>
                            <button
                                className='cartItem__removeButton'
                                onClick={Remove}>
                                x
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        



        </>

    )
}

export default CartItem