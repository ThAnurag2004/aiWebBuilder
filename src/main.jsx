import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Landing from './pages/Landing.jsx'
import DashBoard from './pages/Dashboard.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Landing />} />
      <Route path='/dashboard' element={<DashBoard/>}  />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)