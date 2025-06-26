import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound.jsx'

const router = createBrowserRouter([
  {path: "/*", element: <App/>},
  {path: "/*", element: <NotFound/>},
],
{
    basename: "/Pixabay-Images-Gallery", // 👈 Add this line
  })


createRoot(document.getElementById('root')).render(



  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
