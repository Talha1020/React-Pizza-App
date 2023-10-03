import Order from "./order/Order";
import Home from "./ui/Home";
import CreateOrder from "./order/CreateOrder";
import OrderItem from "./order/OrderItem";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as menuLoader } from "./features/menu/Menu";
import Error from "./ui/Error";
import { loadOrder as orderLoader } from "./order/Order";
import { createNewOrder } from "./order/CreateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/order/:id", element: <Order />, loader: orderLoader },

      { path: "/menu", element: <Menu />, loader: menuLoader },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createNewOrder,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
