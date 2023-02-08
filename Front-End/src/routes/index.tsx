import { Element } from "chart.js";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from '../App'
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Subjects from "../pages/Subjects";
import SubjectForm from "../pages/Subjects/SubjectForm";
import Users from "../pages/Users";
import UserForm from "../pages/Users/UserForm";


export const router = 
  createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/users/:userId",
          element: <Profile />,
        },
        {
          path: "/users/:userId/edit",
          element: <UserForm />
        },
        {
          path: "/users/create",
          element: <UserForm />
        },
        {
          path: "/subjects",
          element: <Subjects />
        },
        {
          path: "/subjects/:subjectId",
          element: <SubjectForm />
        },
        {
          path: "/subjects/create",
          element: <SubjectForm />
        }
        
      ]
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        
      ]
    },
  ]);