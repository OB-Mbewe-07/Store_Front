import type { RootState } from "../app/store";
import   { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity,remove, clear} from "../feature/cart/cartSlice";

const CartSummary = () => {
  /*This i s coming from the global state that is coming from the store */
  const cart = useSelector((state:RootState) => state.cart.products);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>

      <div className="total-line">
        <span>Total Items: {totalItems} </span>
        <span className="price">R{totalPrice.toFixed(2)}</span>
      </div>

      {cart.map((item) => (
        <div key={item.product.id} className="cart-item">
          <div className="title">{item.product.title}</div>
          <div className="quantity">Qty: {item.quantity}</div>

          <div className="buttons">
            <button
              className="btn add"
              onClick={() => dispatch(increaseQuantity(item.product.id))}
            >
              +
            </button>
            <button
              className="btn subtract"
              onClick={() => dispatch(decreaseQuantity(item.product.id))}
            >
              −
            </button>
            <button
              className="btn remove"
              onClick={() => dispatch(remove(item.product.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <button
        className="clear-btn"
        onClick={() => dispatch(clear())}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartSummary;