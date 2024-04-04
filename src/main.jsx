
import ReactDOM from 'react-dom/client'

import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <AuthProvider>
  <Toaster />
<div className='max-w-screen-xl mx-auto'>
<RouterProvider router={router} />
</div></AuthProvider>
  </HelmetProvider>,
)
