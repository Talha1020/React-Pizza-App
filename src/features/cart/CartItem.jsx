import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
/* eslint react/prop-types: 0 */
import { useDispatch } from 'react-redux';
import { addQuantity, delFromCart, delQuantity } from './cartSlice';

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1  sm:mb-0">
        <span className="font-semibold">{quantity}</span>
        &times; {name}
      </p>
      <div className="flex  items-center justify-between  sm:gap-2">
        <p className=" mr-5 text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => dispatch(addQuantity(item))}
            className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-sm font-bold text-gray-800 transition duration-300 ease-in-out hover:bg-gray-400  focus:outline-none"
          >
            <span className="absolute inset-0 ">+</span>
          </button>

          <button
            onClick={() => dispatch(delFromCart(item))}
            className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-sm font-bold text-gray-800 transition duration-300 ease-in-out hover:bg-gray-400  focus:outline-none"
          >
            <span className="absolute inset-0 ">-</span>
          </button>
        </div>
        <Button onClick={() => dispatch(delQuantity(item))} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
