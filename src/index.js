// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ToDoList from './ToDoList';
import Tabs from './Tabs';
import App from './App';
import { ToastContainer } from 'react-toastify';
import Page404 from './Page404';
import ContactUsForm from './ContactUsForm';
import PasswordGenerator from './PasswordGenerator';
import WeatherCheck from './WeatherCheck';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <ToDoList /> },
      { path: 'tabs', element: <Tabs /> },
      { path:'contact-us', element:<ContactUsForm/>},
      { path:'password-generator', element:<PasswordGenerator/>},
      { path:'weather',element:<WeatherCheck/>}
    ]
  },
  {
    path:'*',
    element:<Page404/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
