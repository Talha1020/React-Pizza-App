import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AppLayout() {
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-auto">
        <main className="relative mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      {username && <CartOverview />}
    </div>
  );
}

export default AppLayout;
