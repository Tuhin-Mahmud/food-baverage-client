import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Provider/AuthProvider.jsx'
import {
    QueryClient,
    QueryClientProvider,

} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className=''>
        <React.StrictMode>
            <ToastContainer />
            <div><Toaster /></div>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <RouterProvider router={router}></RouterProvider>
                </AuthProvider>
            </QueryClientProvider>

        </React.StrictMode>,
    </div>
)
