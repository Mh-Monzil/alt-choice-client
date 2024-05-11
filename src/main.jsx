import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./pages/Home";
import Queries from "./pages/Queries";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import AddQueries from "./pages/AddQueries";
import MyQueries from "./pages/MyQueries";
import MyReco from './pages/MyReco.jsx';
import RecoForMe from './pages/RecoForMe.jsx';
import PrivateRoute from "./privateRoute/PrivateRoute.jsx";
import ViewDetailsQuery from "./components/ViewDetailsQuery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: '/add-queries',
        element: <PrivateRoute>
        <AddQueries />
      </PrivateRoute>
      },
      {
        path: '/my-queries',
        element: <PrivateRoute>
        <MyQueries />
      </PrivateRoute>
      },
      {
        path: '/my-recommendations',
        element:  <PrivateRoute>
        <MyReco />
      </PrivateRoute>
      },
      {
        path: '/recommendations-for-me',
        element: <PrivateRoute>
          <RecoForMe />
        </PrivateRoute>
      },
      {
        path: '/view-details/:id',
        element: <ViewDetailsQuery />,
        loader: ({params}) => fetch(`http://localhost:5000/view-details/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
