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
import Offline from './pages/Offline.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Landing />} />
      <Route path='/dashboard' element={<DashBoard/>}  />
      <Route path='/offline' element={<Offline />}  />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeedInsights/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)