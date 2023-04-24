import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem, Product } from "../../redux/constants/product-interface";

export const CartComponent = () => {
    const cartItems = useSelector((state: any) => state.products.cartItems);
    const products = useSelector((state: any) => state.products.products);
    const [subTotal, setSubTotal] = useState(0);
    const shippingPrice = 5.9;

    const RenderCartItems = () => cartItems.map((cartItem: CartItem) => {
        const product: Product = products.find((product: Product) => product.id === cartItem.id);
        const {title, id, price, image} = product;
        return (
            <div className="row justify-content-between align-items-center p-2 mt-3" key={id} style={{backgroundColor: 'white'}}>
                <div className="card col-lg-5 col-xs-12 mb-2">
                    <img src={image} alt={title} style={{height:'250px'}}/>
                </div>
                <div className="content col-lg-6 col-xs-12">
                    <div><b>Product:</b> {title}</div>
                    <div><b>Product ID:</b> {id}</div>
                    <div className="price"><b>Qty:</b> {cartItem.quantity}</div>
                    <div className="price"><b>Price:</b> $ {price}</div>
                </div>
            </div>
        );
    });

    useEffect(() => {
        let cartPrice =  cartItems.reduce((acc: number, curr: CartItem) => {
            const product: Product = products.find((product: Product) => product.id === curr.id);
            return acc + Math.round(curr.quantity * product.price);
        } , 0);
        setSubTotal(cartPrice);
    }, [cartItems, products]);

    return (
        <div className="container mt-2">
            <h4>Shopping Cart({cartItems.length})</h4>
            {cartItems.length > 0 ? (
            <>
                <div className="row justify-content-between">
                    <div className="col-lg-8">
                        <RenderCartItems />
                    </div>
                    <div className="col-lg-3 mt-3 p-3" style={{backgroundColor: 'white'}}>
                        <h4>ORDER SUMMARY</h4>
                        <hr />
                        <div className="mt-6">Subtotal $ {subTotal}</div>
                        <div>Estimated Shipping $ {shippingPrice}</div>
                        <hr />
                        <div>Total $ {subTotal + shippingPrice}</div>
                    </div>
                </div>
                <hr />
                <div className="row mt-3 p-2" style={{backgroundColor: 'white'}}>
                    <form action="">
                        <h4>Checkout</h4>
                        <div className="row">
                            <div className="col-lg-5 mt-4">
                                <label className='' htmlFor="email">Email</label>
                                <input
                                    id='email'
                                    type='text'
                                    name='email'
                                    className="form-control"
                                    placeholder='Email'
                                />
                            </div>
                            <div className="col-lg-5 mt-4">
                                <label className='' htmlFor="name">Name</label>
                                <input
                                    id='name'
                                    type='text'
                                    name='name'
                                    className="form-control"
                                    placeholder='Name'
                                />
                            </div>
                            <div className="col-lg-4 mt-4">
                                <label className='' htmlFor="keywords">Contact Number</label>
                                <input
                                    id='contact-number'
                                    type='number'
                                    name='contactNumber'
                                    className="form-control"
                                    placeholder='Contact Number'
                                />
                            </div>
                        </div>
                        
                        <div className="row mt-4">
                            <p className="mt-4">Delivery Address</p>
                            <div className="col-lg-5">
                                <label className='' htmlFor="address-line1">Address Line 1</label>
                                <input
                                    id='address-line1'
                                    type='text'
                                    name='address-line1'
                                    className="form-control"
                                    placeholder='Address Line 1'
                                />
                            </div>
                            <div className="col-lg-5">
                                <label className='' htmlFor="address-line2">Address Line 2</label>
                                <input
                                    id='address-line2'
                                    type='text'
                                    name='address-line2'
                                    className="form-control"
                                    placeholder='Address Line 2'
                                />
                            </div>
                            <div className="col-lg-4 mt-4">
                                <label className='' htmlFor="keywords">City</label>
                                <input
                                    id='city'
                                    type='text'
                                    name='city'
                                    className="form-control"
                                    placeholder='City'
                                />
                            </div>
                            <div className="col-lg-4 mt-4">
                                <label className='' htmlFor="keywords">State</label>
                                <input
                                    id='state'
                                    type='text'
                                    name='state'
                                    className="form-control"
                                    placeholder='State'
                                />
                            </div>
                            <div className="col-lg-4 mt-4">
                                <label className='' htmlFor="keywords">Pin Code</label>
                                <input
                                    id='pincode'
                                    type='number'
                                    name='pincode'
                                    className="form-control"
                                    placeholder='Pin Code'
                                />
                            </div>
                            
                        </div>
                        <div className="d-flex mt-4 justify-content-center">
                            <button className="btn btn-success ">Checkout</button>

                        </div>
                    </form>
                </div>
            </>
            ) : (
                <h2>No items found in cart</h2>
            )}
        </div>
    )
}