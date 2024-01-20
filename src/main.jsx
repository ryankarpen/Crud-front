import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import Products from './routes/Products.jsx'
import CreateForm from './routes/CreateForm.jsx'
import EditForm from './routes/EditForm.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Products/>
      },
      {
        path: "/products/new",
        element: <CreateForm/>
      },
      {
        path: "/products/edit/:id",
        element: <EditForm/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
