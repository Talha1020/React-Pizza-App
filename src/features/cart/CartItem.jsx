/* eslint-disable react/prop-types */
import { formatCurrency } from "../../starter/helpers";

function CartItem({ item }) {
  // eslint-disable-next-line no-unused-vars
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
