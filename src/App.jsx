import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataProvider from "./DataProvider";
import LandingPage from "./LandingPage";
import RegistrationScreen from "./Components-Registration/RegistrationScreen";


const router = createBrowserRouter([
{
  path: '/PRP',
  element: <LandingPage/>,
},
{
  path:'/PRP/UserRegistration',
  element:<RegistrationScreen/>
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
