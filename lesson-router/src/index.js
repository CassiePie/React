import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './ErrorPage';
import Users from './Users';
import AddUser from './AddUser';
import UserDetails from './UserDetails';
import StarWars, { loadStarWarsPeople } from './StarWars';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//----------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: 'starwars',
        loader: loadStarWarsPeople,
        element: <StarWars />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'users',
        element: <Users />,
        children: [
          {
            path: 'add',
            element: <AddUser />
          },
          {
            path: ':username',
            element: <UserDetails />
          }
        ]
      }
    ]
  },
])

//----------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//----------------------------------------------------------------


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
