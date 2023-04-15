import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Login from './components/Login';
import Homepage from "./components/Homepage";
import Home from "./components/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "home",
    element: 
      <>
      <Header/>
      <Home/> 
    </>
    
  },
]);

function App() {
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
