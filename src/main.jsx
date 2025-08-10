import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import Loading from './Page/Shared/Loading.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <ThemeProvider>
        <Suspense fallback={<Loading />}>
       <RouterProvider router={router} />
      </Suspense>
        <ToastContainer/>
      </ThemeProvider>
     </AuthProvider>
  </StrictMode>,
)
