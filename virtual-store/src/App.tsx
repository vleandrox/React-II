import Home from './components/Home';
import Details from './views/Details';
import Cart from './views/Cart';
import {OnSale} from './components/OnSale';
import NotFound from './views/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const browserRouter = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/details/:id", element: <Details/> },
  { path: "/cart", element: <Cart/> },
  { path: "/onsale", element : <OnSale/>},
  { path: "/notfound", element: <NotFound/> }
]);

function App() {
  return (
    <RouterProvider router={browserRouter}>

    </RouterProvider>
  );
}

export default App
