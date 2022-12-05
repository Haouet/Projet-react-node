import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Order from './Order';
import { useSelector } from 'react-redux';
const baseURL = "http://localhost:5000/api/users";
export default function Checkout() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFistname] = useState('');
    const [last_name, setLastname] = useState('');
    const [country, setCountry] = useState('');
    const [road, setRoad] = useState('');
    // const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [compte, setCompte] = useState('');
    const [notes, setNotes] = useState('');
    const [message, setMessage] = useState('');  
    const [payment, setPayment] = useState('');
    useEffect(() => {
        async function fetchData() {
            try {
                console.log("fetching")
                const { data: response } = await axios.get(`${baseURL}`);
                console.log(response);
                setUsers(response);

            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, [])
    const check = useSelector((state) => state.Card.Card);
    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        check.forEach(item => {
            totalQuantity += item.Qts
            totalPrice += item.price * item.Qts
        })
        return { totalPrice, totalQuantity }
    }
   const itemList = (item) => {
       var Total = 0 ;
       Total =  item.price *  item.Qts
      
        return (
            <li key={item.id} >
                {item.title} X {item.Qts}
                <span >${Total}</span>
            </li>
        );
    }
 
    // const handleChange = () => {
    //     setPayment("Cash On Delivery");
    // }
    return (
        <section className="checkout spad">
            <div className="container">
                <div className="checkout__form">
                    <h4>Billing Details</h4>
                    {/* <div> {message}</div> */}
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <label htmlFor="firstname">Fist Name<span>*</span></label>
                                        <input type="text" className="form-control"  id='firstname' label="first_name" placeholder="Fist Name" onChange={(e) => {
                                            setFistname(e.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <label htmlFor="lastname">Last Name<span>*</span></label>
                                        <input type="text" className="form-control" id="lastname" label="last_name" placeholder="Last Name" onChange={(e) => {
                                            setLastname(e.target.value)
                                        }} />
                                    </div>
                                </div>
                            </div>
                             {/* adresss */}
                            <div className="checkout__input">
                                <label htmlFor="country">Country<span>*</span></label>
                                <input type="text" className="form-control" label="country" id="country" placeholder="Country" onChange={(e) => {
                                    setCountry(e.target.value)
                                }} />

                            </div>
                            <div className="checkout__input">
                                <label htmlFor="road">Road<span>*</span></label>
                                <input type="text" className="form-control" label="road" id="road" placeholder="Street Address" onChange={(e) => {
                                    setRoad(e.target.value)
                                }} />
                                {/* <input type="text" className="form-control" label="address" placeholder="Apartment, suite, unite ect (optinal)" onChange={(e) => {
                                    setAddress(e.target.value)
                                }} /> */}
                            </div>
                            <div className="checkout__input">
                                <label htmlFor="city">Town/City<span>*</span></label>
                                <input type="text" className="form-control" label="city" id="city" placeholder="Town/City" onChange={(e) => {
                                    setCity(e.target.value)
                                }} />

                            </div>
                            {/* <div className="checkout__input">
                                <label htmlFor="exampleInputEmail1">Country/State<span>*</span></label>
                                <input type="text" className="form-control" label="state" placeholder="Country/State" onChange={(e) => {
                                    setState(e.target.value)
                                }} />
                            </div> */}
                            {/* <div className="checkout__input">
                                <label htmlFor="exampleInputEmail1">Postcode / ZIP<span>*</span></label>
                                <input type="text" className="form-control" label="zip" placeholder="Postcode / ZIP" onChange={(e) => {
                                    setZip(e.target.value)
                                }} />
                            </div> */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <label htmlFor="phone">Phone<span>*</span></label>
                                        <input type="text" className="form-control" label="phone" id="phone" placeholder="Phone" onChange={(e) => {
                                            setPhone(e.target.value)
                                        }} />

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <label htmlFor="email">Email<span>*</span></label>
                                        <input type="email" className="form-control" label="email" id='email' placeholder="Email" onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    </div>
                                </div>
                            </div>
                            <div className="checkout__input__checkbox">
                                <label htmlFor="acc">
                                    Create an account?
                                    <input type="checkbox" id="acc" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <p>Create an account by entering the information below. If you are a returning customer
                                please login at the top of the page</p>
                            <div className="checkout__input">
                                <label htmlFor="username">Username<span>*</span></label>
                                <input type="text" className="form-control" label="username" id="username" placeholder="Username" onChange={(e) => {
                                    setUsername(e.target.value)
                                }} />

                            </div>
                            <div className="checkout__input">
                                <label htmlFor="password">Account Password<span>*</span></label>
                                <input type="password" className="form-control" label="password" id="password"  placeholder="Password" onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />

                            </div>
                            {/* <div className="checkout__input__checkbox">
                                <label for="diff-acc">
                                    Ship to a different address?
                                    <input type="checkbox" id="diff-acc" />
                                    <span className="checkmark"></span>
                                </label>
                            </div> */}
                            {/* <div className="checkout__input">
                                <label htmlFor="exampleInputEmail1">Order notes<span>*</span></label>
                                <input type="text" className="form-control" label="order" placeholder="Notes about your order, e.g. special notes for delivery." onChange={(e) => {
                                    setNotes(e.target.value)
                                }} />

                            </div> */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkout__order">
                                <h4>Your Order</h4>
                                <div className="checkout__order__products">Products<span>Total</span></div>
                                <ul>
                                    {check.map(itemList)}
                                </ul>
                                <div className="checkout__order__total">Total <span>${getTotal().totalPrice}</span></div>
                                <div className="checkout__input__checkbox">
                                    <label htmlFor="acc-or">
                                        Create an account?
                                        <input type="checkbox" id="acc-or"  onChange={(e) => {
                                            var value = e.target.value;
                                            console.log("True " + value);
                                    setCompte(e.target.value)
                                }} />
                                        <span className="checkmark"  />
                                    </label>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                                <div className="checkout__input__checkbox">
                                    <label htmlFor="payment">
                                        Check Payment
                                        <input type="checkbox" id="payment"  value="Cash On Delivery" label="payment_method"   onChange={(e) => {
                                            var value = e.target.value;
                                            console.log("You selected " + value);
                                    setPayment(e.target.value)
                                }}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <button type="submit" className="site-btn" onClick={async () => {
                                    // const orders = { total : total };
                                    // console.log(orders);
                                    const user = await axios.post(`${baseURL}/signup`, 
                                    {
                                        
                                        username,
                                        email,
                                        password,
                                        last_name,
                                        first_name,
                                        adress: 
                                            { 
                                            country,
                                            road,
                                            city
                                            },
                                        phone
                                                                       
                                    },).then(res => console.log(res.user))
                                    .catch(err => console.log(err));
                                
                                    // setMessage(user.msg)

                                    // if (response.success) {
                                    //     window.location = '/login'
                                    // }

                                }}> PLACE ORDER</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
