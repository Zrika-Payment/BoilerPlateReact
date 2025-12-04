import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RouteLayout } from './components/layout/RouteLayout.jsx'
import { Contactus } from './pages/Contactus.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { About } from './pages/About.jsx'
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
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
