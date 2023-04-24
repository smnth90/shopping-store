import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { useSelector } from "react-redux";
import {AiOutlineShoppingCart, AiFillHome} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";

export const Header = () => {
    const cartItems = useSelector((state: any) => state.products.cartItems);
    return (
        <div className="header container-fluid px-0">
            <div className="header-menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    
                    <Link to={'/'}  className="navbar-brand">The Shopping Store</Link>
                    <div className="container-fluid navbar-items" id="navbarSupportedContent">
                        <ul className="navbar-nav left-nav">
                            <li className="nav-item">
                                <Link to={'/'} className="header-link">
                                    <div className="nav-item-link">
                                        <div className="only-mobile"><AiFillHome /></div>
                                        <div>Home</div>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item pl-3">
                                <Link to={'/categories'} className="header-link">
                                    <div className="nav-item-link">
                                        <div className="only-mobile"><AiFillHome /></div>
                                        <div>Category</div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav right-nav">
                            <li className="nav-item pl-3">
                                <Link to={'/cartItems'} className="header-link">
                                    <div className="nav-item-link">
                                        <div>
                                            <AiOutlineShoppingCart /> {cartItems.length > 0 ? cartItems.length : null}
                                        </div>
                                        <div className="only-mobile">Cart</div>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item header-link user-account">
                                <div className="nav-item-link">
                                    <div>
                                    <BiUserCircle />
                                    </div>
                                    <div className="only-mobile">User</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                </nav>
            </div>
            <div className="header-alert text-center py-1">Super Deal! Free shipping on Orders above $50</div>
        </div>
    )
}