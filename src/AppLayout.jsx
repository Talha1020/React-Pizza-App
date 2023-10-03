import { Outlet } from "react-router-dom";
import CartOverview from "./features/cart/CartOverview";
import Menu from "./features/menu/Menu";
import Header from "./Header";
import { useNavigation } from "react-router-dom";
import { Loader } from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
