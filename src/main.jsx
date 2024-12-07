import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
import Loan from './pages/Loan.jsx';
import Transaction from './pages/Transaction.jsx';
import Charts from './pages/Charts.jsx';
import Crops from './pages/Crops.jsx';
import Cow from './pages/Cow.jsx';
import Chicken from './pages/Chicken.jsx';
import Scheme from './pages/Scheme.jsx';
import Animals from './pages/Animals.jsx';
import './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/loan",
        element: <Loan/>,
      },
      {
        path: "/transaction",
        element: <Transaction/>,
      },
      {
        path: "/charts",
        element: <Charts/>,
      },
      {
        path: "/crops",
        element: <Crops/>,
      },
      {
        path: "/cow",
        element: <Cow/>,
      },
      {
        path: "/chicken",
        element: <Chicken/>,
      },
      {
        path: "/scheme",
        element: <Scheme/>,
      },
      {
        path: "/animals",
        element: <Animals/>,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
