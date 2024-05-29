import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import ProductPage from '../pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;