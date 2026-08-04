import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataProvider from "./DataProvider";
import LandingPage from "./LandingPage";
import RegistrationScreen from "./Components-Registration/RegistrationScreen";
import CommonLoginScreen from "./Components-Login/CommonLoginScreen";
import StudentLogin from "./Components-Login/StudentLogin";
import RecruiterLogin from "./Components-Login/RecruiterLogin";
import TrainingCoordinatorLogin from "./Components-Login/TrainingCoordinatorLogin";
import ForgotPassword from "./Components-Login/ForgotPassword";
import PlacementofficerLogin from "./Components-Login/PlacementofficerLogin";
import AdminLogin from "./Components-Login/AdminLogin";
import AdminDashboard from "./Components-Admin/AdminDashboard";
import TrainerDashboardHome from "./Components-TrainingCo/TrainerDashboardHome";
import StudentDashboardHome from "./Components-Student/StudentDashboardHome";
import RecruiterDashboardHome from "./Components-Recruiter/RecruiterDashboardHome";
import PlacementOffDashboardHome from "./Components-PlacementOfficer/PlacementOffDashboardHome";
import AdminDashboardHome from "./Components-Admin/AdminDashboardHome";


const router = createBrowserRouter([
{
  path: '/PRP_Portal',
  element: <LandingPage/>,
},
{
  path: '/PRP_Portal/Admin',
  element: <AdminLogin/>,
},
{
  path:'/PRP_Portal/UserRegistration',
  element:<RegistrationScreen/>
},
{
  path:'/PRP_Portal/Login',
  element:<CommonLoginScreen/>
},
{
  path:'/PRP_Portal/Login/Student',
  element:<StudentLogin/>
},
{
  path:'/PRP_Portal/Login/PlacementOfficer',
  element:<PlacementofficerLogin/>
},
{
  path:'/PRP_Portal/Login/Recruiter',
  element:<RecruiterLogin/>
},
{
  path:'/PRP_Portal/Login/TrainingCoordinator',
  element:<TrainingCoordinatorLogin/>
},
{
  path:'/PRP_Portal/Login/Forgotpassword',
  element:<ForgotPassword/>
},
{
  path: '/PRP_Portal/TrainingCoordinator/Dashboard',
  element: <TrainerDashboardHome/>,
},
{
  path: '/PRP_Portal/Admin/Dashboard',
  element: <AdminDashboardHome/>
},
{
  path: '/PRP_Portal/Student/Dashboard',
  element: <StudentDashboardHome/>,
},
{
  path: '/PRP_Portal/Recruiter/Dashboard',
  element: <RecruiterDashboardHome/>,
},
{
  path: '/PRP_Portal/PlacementOfficer/Dashboard',
  element: <PlacementOffDashboardHome/>,
},


])

function App() {
  return (
   <DataProvider>
    <RouterProvider router={router}/>
   </DataProvider>
  )
}

export default App
