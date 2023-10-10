import { Link } from 'react-router-dom';

import { BackLink } from '../../ui/Button';

function EmptyCart() {
  return (
    <div className=" h-64 rounded-lg  bg-blue-400 p-6 text-gray-100 shadow-xl">
      <p className=" mb-8 text-3xl font-bold">Your cart is empty.</p>
      <p className="text-lg">
        Start adding some pizzas right away
        <BackLink to="/menu">
          <span className="ml-4 inline-block rounded-full bg-yellow-400 px-4 py-2  text-xs font-semibold uppercase tracking-wide text-stone-800  transition-colors duration-300 hover:bg-yellow-300 active:bg-yellow-300 active:outline-none active:ring active:ring-yellow-300 active:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-2.5">
            Pizza Menu
          </span>
        </BackLink>
      </p>
    </div>
  );
}

export default EmptyCart;
