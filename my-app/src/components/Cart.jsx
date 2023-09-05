import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import Total from "./Total";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total />
      </div>
    </div>
  );
}

export default Cart;
