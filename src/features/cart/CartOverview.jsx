import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartOverview() {
  const totalItemsQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0),
  );
  // console.log(cart);
  const totalPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, cur) => sum + cur.totalPrice, 0),
  );

  return (
    <div className="flex items-center justify-between bg-stone-600 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {totalItemsQuantity} {totalItemsQuantity <= 1 ? 'PIZZA' : 'PIZZAS'}
        </span>
        <span>${totalPrice}</span>
      </p>

      <Link to="/cart">
        Open cart
        <span className="ml-2 rounded-full bg-stone-200 p-1">🛒</span>
        &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
