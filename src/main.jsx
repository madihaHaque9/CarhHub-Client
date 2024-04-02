
import ReactDOM from 'react-dom/client'

import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <Toaster />
<div className='max-w-screen-xl mx-auto'>
<RouterProvider router={router} />
</div></AuthProvider>,
)
