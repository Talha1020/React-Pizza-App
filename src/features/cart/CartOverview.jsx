import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalItemsQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0),
  );

  const totalPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, cur) => sum + cur.totalPrice, 0),
  );

  if (totalItemsQuantity < 1) return null;

  return (
    <div className="relative  flex items-center justify-between bg-stone-600 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <div className="flex items-center justify-center space-x-1">
        <div className="rounded-full bg-yellow-500 p-2">
          <p className="text-sm font-semibold text-gray-500">
            {totalItemsQuantity} {totalItemsQuantity <= 1 ? 'PIZZA' : 'PIZZAS'}
          </p>
        </div>
        <div className="justify-content flex rounded-full bg-gray-200 p-2 ">
          <p className="  inline-block  text-sm font-semibold text-gray-500">
            {formatCurrency(totalPrice)}
          </p>
        </div>
      </div>

      <Link to="/cart">
        Open cart
        <span className=" ml-2  rounded-full bg-stone-200 p-1">🛒</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="text-gray-600"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 1-2-2H10a2 2 0 0 1-2 2zm1-14a1 1 0 0 1 .293.293l1.261 1.261C10.676 3.488 11 4.213 11 5v3.735a4.001 2.001 0 0 1-1.172 3.635.75.75 0 0 0-.656.746v1a2.5 2.5 0 1 1-1 0v-1a.75.75 0 0 0-.656-.746A4.001 2.001 0 0 1 4 8.735V5a1 1 0 0 1 1-1zM8 0a2 2 0 0 1 2 2H6a2 2 0 0 1 2-2z" />
        </svg>
        <div className="absolute  right-5 top-0 -mr-3 mt-0.5 rounded-md bg-red-500 px-2 py-1 text-xs font-semibold text-white">
          {totalItemsQuantity}
        </div>
      </Link>
    </div>
  );
}

export default CartOverview;
