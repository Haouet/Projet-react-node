import { removeItem, decrementQuantity, incrementQuantity } from '../../features/CardSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import formatCurrency from '../formatCurrency';
function CartItem({ id, title, price,Qts}) {
    const cart = useSelector((state) => state.Card.Card);

    
    //  let totalQuantity = 1      
    
    
    const [totalQuantity, setTotalQuantity] = useState(Qts);
    // console.log(id);

    const dispatch = useDispatch();

    const onClickIncrease = (e) => {
        //   console.log(Qts);
        e.stopPropagation();
       setTotalQuantity(totalQuantity + 1);

        dispatch(incrementQuantity(id))
    }
    const onClickDecrease = (e) => {
        e.stopPropagation();
        if (totalQuantity >= 1) {
        setTotalQuantity(totalQuantity - 1);
        
        dispatch(decrementQuantity(id))
    }else{
        setTotalQuantity(totalQuantity);
    }
    
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
                    <tr key={id}>
                        <td className="shoping__cart__item">
                            <h5 >{title}</h5>
                        </td>
                        <td className="shoping__cart__price">
                            {formatCurrency(price)}
                        </td>
                        <td className="shoping__cart__quantity">
                            <div className="quantity">
                                <div className="pro-qty">
                                    <span className="dec qtybtn" onClick={onClickDecrease} >-</span>
                                    <input type="text" value={totalQuantity} />
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