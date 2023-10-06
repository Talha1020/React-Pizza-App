import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
/* eslint react/prop-types: 0 */
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, addToCart, delQuantity } from './cartSlice';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  // const [ItemQuantity, setItemQuantity] = useState(0);

  // const newPizza = {
  //   pizzaId: id,
  //   name,
  //   quantity: ItemQuantity,
  //   unitPrice,
  //   totalPrice: unitPrice * ItemQuantity,
  // };
  // function handlerOnClick() {
  //   if (ItemQuantity === 0) return;
  //   if (cart.length > 0) {
  //     const containsItem = cart.some((item) => item.pizzaId === id);
  //     containsItem
  //       ? dispatch(addQuantity(newPizza))
  //       : dispatch(addToCart(newPizza));
  //   } else {
  //     dispatch(addToCart(newPizza));
  //   }
  // function quantityHandlerAdd() {
  //   setItemQuantity((ItemQuantity) => ItemQuantity + 1);
  // }
  // function quantityHandlerSub() {
  //   if (ItemQuantity > 0) setItemQuantity((ItemQuantity) => ItemQuantity - 1);
  // }
  const dispatch = useDispatch();
  const quantityId = useSelector((state) => state.cart.cart.pizzaId);
  console.log(quantityId);
  function deleteHandler() {
    dispatch(delQuantity(quantityId));
  }
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="ml-[22rem] flex items-center">
          <button
            // onClick={quantityHandlerAdd}
            className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-sm font-bold text-gray-800 transition duration-300 ease-in-out hover:bg-gray-400  focus:outline-none"
          >
            <span className="absolute inset-0 ">+</span>
          </button>
          <input
            type="text"
            className="mx-2 h-6 w-10 rounded-md border border-gray-300 text-center text-gray-700 focus:outline-none"
            // value={ItemQuantity}
            inputMode="numeric"
            // onChange={quantityHandler}
          />
          <button
            // onClick={quantityHandlerSub}
            className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-sm font-bold text-gray-800 transition duration-300 ease-in-out hover:bg-gray-400  focus:outline-none"
          >
            <span className="absolute inset-0 ">-</span>
          </button>
        </div>
        <Button onClick={deleteHandler} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
