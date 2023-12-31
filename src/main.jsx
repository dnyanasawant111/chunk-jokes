import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import Random from './Components/Random';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },



  {
    path: "/random",
    element: <Random />
  },
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);



