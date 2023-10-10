import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user?.username);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <div>
        <h2 className="mt-7 inline-block rounded-full bg-yellow-50 px-4 py-2 text-xl font-semibold italic">
          Your cart,
          <span className="capitalize"> {username}</span>
        </h2>
      </div>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      {cart.length > 0 ? (
        <div className="mt-6 space-x-2">
          <Button to="/order/new" type="primary">
            Order pizzas
          </Button>

          <Button onClick={() => dispatch(clearCart())} type="secondary">
            Clear cart
          </Button>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
