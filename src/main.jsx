import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './views/App.jsx'
import Detail from './views/Detail.jsx'
import Splash from './views/Splash.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "detail",
    element: <Detail />
  },
  {
    path: "splash",
    element: <Splash />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)