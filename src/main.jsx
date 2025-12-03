import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { RouteLayout } from './components/layout/RouteLayout.jsx'
import { Contactus } from './pages/Contactus.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<RouteLayout/>,
      Children:[
    {
      path:"Contactus",
      element:<Contactus/>

    }
  ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
