import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Landing from './pages/Landing.jsx'
import DashBoard from './pages/Dashboard.jsx'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
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
  <BrowserRouter>
    <RouterProvider router={router} />
  </BrowserRouter>,
)