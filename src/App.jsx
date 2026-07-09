import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataProvider from "./DataProvider";
import LandingPage from "./LandingPage";
import RegistrationScreen from "./Components-Registration/RegistrationScreen";
import CommonLoginScreen from "./Components-Login/CommonLoginScreen";
import StudentLogin from "./Components-Login/StudentLogin";


const router = createBrowserRouter([
{
  path: '/PRP_Portal',
  element: <LandingPage/>,
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


])

function App() {
  return (
   <DataProvider>
    <RouterProvider router={router}/>
   </DataProvider>
  )
}

export default App
