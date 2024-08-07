import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes.jsx'
import AuthProvider from './Authentication/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={PublicRoutes} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
