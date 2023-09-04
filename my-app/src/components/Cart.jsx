import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      
    </div>
  );
};

export default Cart;
