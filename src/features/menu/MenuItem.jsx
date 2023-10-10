import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addQuantity, addToCart } from '../cart/cartSlice';
import { useEffect, useState } from 'react';

/* eslint react/prop-types: 0 */
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();
  const [ItemQuantity, setItemQuantity] = useState(0);

  const newPizza = {
    pizzaId: id,
    name,
    quantity: ItemQuantity,
    unitPrice,
    totalPrice: unitPrice * ItemQuantity,
  };
  function handlerOnClick() {
    if (ItemQuantity === 0) return;
    // its for cheching if anyone adds 0 quantity in the input and add, to avoid it, early return is added if there is no input.
    if (cart.length > 0) {
      const containsItem = cart.some((item) => item.pizzaId === id);
      // checking if it contains the element before , if yes then first function will run to add the quantity, if not then second to add the item.
      containsItem
        ? dispatch(addQuantity(newPizza))
        : dispatch(addToCart(newPizza));
    } else {
      dispatch(addToCart(newPizza));
    }

    // ;
  }

  function quantityHandlerAdd() {
    setItemQuantity((ItemQuantity) => ItemQuantity + 1);
  }
  // useEffect(
  //   function () {
  //     dispatch(addToCart(newPizza));
  //   },
  //   [ItemQuantity, dispatch],
  // );

  function quantityHandlerSub() {
    if (ItemQuantity > 0) setItemQuantity((ItemQuantity) => ItemQuantity - 1);
  }
  function quantityHandler(e) {
    const inputValue = Number(e.target.value);
    if (isNaN(inputValue)) return;
    setItemQuantity(inputValue);
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut && (
            <>
              <div className="ml-[22rem] flex items-center">
                <button
                  onClick={quantityHandlerAdd}
                  className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-sm font-bold text-gray-800 transition duration-300 ease-in-out hover:bg-gray-400  focus:outline-none"
                >
                  <span className="absolute inset-0 ">+</span>
                </button>
                <input
                  type="text"
                  className="mx-2 h-6 w-10 rounded-md border border-gray-300 text-center text-gray-700 focus:outline-none"
                  value={ItemQuantity}
                  inputMode="numeric"
                  onChange={quantityHandler}
                />
                <button
                  onClick={quantityHandlerSub}
                  className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-sm font-bold text-gray-800 transition duration-300 ease-in-out hover:bg-gray-400  focus:outline-none"
                >
                  <span className="absolute inset-0 ">-</span>
                </button>
              </div>
              <Button onClick={handlerOnClick} type="small">
                Add to cart
              </Button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
