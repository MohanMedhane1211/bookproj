//import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './navbar.css';
// import { useEffect } from 'react';
// import axios from 'axios';
const Navbar = () => {
	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;
	// const url_login = window.location.href;
	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	}
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<h2>Book store</h2>
			</div>

			<ul className="navbar__links">
			{/* {
					url_login === 'http://localhost:3000/' ? "" : (<li>
						<Link to="/cart" className="cart__link">
							<i className="fas fa-shopping-cart"></i>
							<span>
								Cart
								<span className="cartlogo___badge">{getCartCount()}</span>
							</span>
						</Link>
					</li>)
				} */}
				<li>
					<Link to="/signup" className="cart__link">Signup</Link>
				</li>
				<li>
					<Link to="/" className="cart__link">Login</Link>
				</li>
				<li>
					<Link to="/cart" className="cart__link">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart
							<span className="cartlogo___badge">{getCartCount()}</span>
						</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;