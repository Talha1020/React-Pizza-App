import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';
import Button from '../../ui/Button';

function Menu() {
  const menu = useLoaderData();
  const username = useSelector((state) => state.user.username);
  return (
    <>
      {!username && (
        <div className="absolute left-96 top-[-100px] mt-2  text-right">
          <Button to="/" type="primary">
            Login now
          </Button>
        </div>
      )}
      <div>
        <ul
          className={`${
            username
              ? 'mt-8 divide-y divide-stone-200 px-2'
              : 'mt-32 divide-y divide-stone-200 px-2'
          }`}
        >
          {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
