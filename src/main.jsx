import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FullAccess from './pages/FullAccess.jsx'
import NoFullAccess from './pages/NoFullAccess.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

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
      path: '/cart',
      Component: Cart
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode >,
)
