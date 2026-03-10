import { useCart, useCartDispatch } from  "../store/context"
import   { useDispatch } from "react-redux";

const CartSummary = () => {
  const cart = useCart();
  const dispatch = useDispatch();

  const totalItems = cart.products.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.products.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>

      <div className="total-line">
        <span>Total Items: {totalItems} </span>
        <span className="price">R{totalPrice.toFixed(2)}</span>
      </div>

      {cart.products.map((item) => (
        <div key={item.product.id} className="cart-item">
          <div className="title">{item.product.title}</div>
          <div className="quantity">Qty: {item.quantity}</div>

          <div className="buttons">
            <button
              className="btn add"
              onClick={() => dispatch({ type: "increaseQuantity", payload: item.product.id })}
            >
              +
            </button>
            <button
              className="btn subtract"
              onClick={() => dispatch({ type: "decreaseQuantity", payload: item.product.id })}
            >
              −
            </button>
            <button
              className="btn remove"
              onClick={() => dispatch({ type: "remove", payload: item.product.id })}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <button
        className="clear-btn"
        onClick={() => dispatch({ type: "clear" })}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartSummary;