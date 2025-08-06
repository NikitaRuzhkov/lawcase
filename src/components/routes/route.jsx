import { createBrowserRouter } from 'react-router-dom';

import {
  About,
  Blog,
  BlogPage,
  GetInTouch,
  Home,
  ServicePage,
  Services,
} from '../pages/pages';
import { Layout } from '../UI/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/services/:id',
        element: <ServicePage />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:id',
        element: <BlogPage />,
      },
      {
        path: '/contact-us',
        element: <GetInTouch />,
      },
    ],
  },
]);
