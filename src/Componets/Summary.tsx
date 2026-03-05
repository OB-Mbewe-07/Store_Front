import { useCart, useCartDispatch } from  "../store/context"
import { Button } from "@heroui/button";

const CartSummary = () => {
  const cart = useCart();
  const dispatch = useCartDispatch();

  const totalItems = cart.products.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.products.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: R{totalPrice.toFixed(2)}</p>

      {cart.products.map((item) => (
        <div key={item.product.id}>
          <p>{item.product.title}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch({ type: "increaseQuantity", payload: item.product.id })}>Add</button>
          <button onClick={() => dispatch({ type: "decreaseQuantity", payload: item.product.id })}>Subract</button>
          <Button onClick={() => dispatch({ type: "remove", payload: item.product.id })}>Remove</Button>
        </div>
      ))}

      <button onClick={() => dispatch({ type: "clear" })}>Clear Cart</button>
    </div>
  );
};

export default CartSummary;