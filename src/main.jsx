import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RouteLayout } from './components/layout/RouteLayout.jsx'
import { Contactus } from './pages/Contactus.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { About } from './pages/About.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { CartDetails } from './components/layout/CartDetails.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout />,
    children: [
      {
        path: '/',
        element: <App />

      },
      {
        path: 'home',
        element: <App />

      },
      {
        path: 'contactus',
        element: <Contactus />

      },
      {
        path: 'dashboard',
        element: <Dashboard />

      },
      {
        path: 'about',
        element: <About />

      },
        {
        path: 'carDetails',
        element: <CartDetails />

      },
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
