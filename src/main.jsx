import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FullAccess from './pages/FullAccess.jsx'
import NoFullAccess from './pages/NoFullAccess.jsx'
import Contact from './pages/Contact.jsx'
import FaProduct from './pages/FaProduct.jsx'
import NoFaProduct from './pages/NoFaProduct.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App
    },
    {
      path: '/full-access',
      Component: FullAccess
    },
    {
      path: '/no-full-access',
      Component: NoFullAccess
    },
    {
      path: '/contact',
      Component: Contact
    },
    {
      path: '/fa-product/:cardID',
      Component: FaProduct
    },
    {
      path: '/nfa-product/:cardID',
      Component: NoFaProduct
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode >,
)
