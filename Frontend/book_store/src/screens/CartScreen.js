import './cartScreen.css';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItems';

import { addToCart, removeFromCart } from '../redux/actions/CartAction';

const CartScreen = () => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	console.log('cart', cart);
	const { cartItems } = cart;
	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart(id, qty));
	}

	const removeHandler = (id) => {
		dispatch(removeFromCart(id));
	}

	const getCartCount = () => {
		// accumulator save the sum of two array items and then reduce method moves to next 
		// array item. (0 is initial value). finally it will return a single value which will be the sum.
		return cartItems.reduce((accumulator, item) => accumulator + Number(item.qty) , 0);
	}

	const getCartSubTotal = () => {
		// accumulator save the sum of two array items and then reduce method moves to next 
		// array item. (0 is initial value). finally it will return a single value which will be the sum.
		return cartItems.reduce((accumulator, item) => accumulator + (item.price * item.qty), 0)
	}
	return <div className="cartscreen">
		<div className="cartscreen__left">
			<h2><span className="gotoback_button"><Link to="/home"> <i class="fa fa-home" aria-hidden="true"> bck_btn </i></Link></span> Shopping Cart</h2>

			{cartItems.length === 0 ? (
				<div>
					<b>Your cart is empty.</b>
				</div>
			) : cartItems.map(item => (
				<CartItem
					key={item.product}
					item={item}
					qtyChangeHandler={qtyChangeHandler}
					removeHandler={removeHandler}
				/>
			))}
		</div>
		<div className="cartscreen__right">
			<div className="cartscreen__info">
				<p>subtotal ({getCartCount()}) items</p>
				<h3>Rs {getCartSubTotal().toFixed(2)}</h3>
			</div>
		</div>
	</div>
};

export default CartScreen;