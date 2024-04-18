import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import Contact from './components/Pages/Contact/Contact.jsx';
import Project from './components/Pages/Project/Project.jsx';
import About from './components/Pages/About/About.jsx'
import Terminal from './components/Pages/Terminal/Terminal.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/project',
    element:<Project/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/terminal',
    element:<Terminal/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
