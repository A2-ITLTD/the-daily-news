import * as React from "react"; 
import * as ReactDOM from "react-dom/client";
import {
 createBrowserRouter, 
 RouterProvider, 
} from "react-router-dom"; 
import "./index.css"; 
import Root from "./Root";
import Home from "./components/Home";
import "./i18n.js";
import LatestNewsEn from "./components/LatestNewsEn.jsx";
import LatestNewsBn from "./components/LatestNewsBn.jsx";
import Contact from "./components/Contact.jsx";
import BreakingNewsEn from "./components/BreakingNewsEn.jsx";
import BreakingNewsBn from "./components/BreakingNewsBn.jsx";
import Details from "./components/Details.jsx";
import Details2 from "./components/Details2.jsx";
import Details3 from "./components/Details3.jsx";
import Details4 from "./components/Details4.jsx";
import CategoryNewsEn from "./components/CategoryNewsEn.jsx";
import CategoryNewsBn from "./components/CategoryNewsBn.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import Login from "./components/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import BreakingNewsPanel from "./components/BreakingNewsPanel.jsx";
import LatestNewsPanel from "./components/LatestNewsPanel.jsx";
import AddNews from "./components/AddNews.jsx";
import AddNewsBn from "./components/AddNewsBn.jsx";
import AddNewsBrkEn from "./components/AddNewsBrkEn.jsx";
import AddNewsBrkBn from "./components/AddNewsBrkBn.jsx";
const router = createBrowserRouter([ 
 { 
 path: "/", 
 element: <Root></Root>,
 children: [
  { path: "/",
    element: <Home></Home>
  },
  { path: "/latestnews",
    element: <LatestNewsEn></LatestNewsEn>
  },
  { path: "/latestnewsbn",
    element: <LatestNewsBn></LatestNewsBn>
  },
  { path: "/breakingnews",
    element: <BreakingNewsEn></BreakingNewsEn>
  },
  { path: "/breakingnewsbn",
    element: <BreakingNewsBn></BreakingNewsBn>
  },
  { path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: '/details/:id',
    element: <Details></Details>,
  },
  {
    path: '/details2/:id',
    element: <Details2></Details2>,
  },
  {
    path: '/details3/:id',
    element: <Details3></Details3>,
  },
  {
    path: '/details4/:id',
    element: <Details4></Details4>,
  },
  {
    path: '/category/:category',
    element: <CategoryNewsEn></CategoryNewsEn>,
  },
  {
    path: '/categorybn/:category',
    element: <CategoryNewsEn></CategoryNewsEn>,
  },
  {
    path: '/Login',
    element: <Login></Login>,
  },
  {
    path: '/adminpanel',
    element: <PrivateRoute><AdminPanel></AdminPanel></PrivateRoute>,
  },
  {
    path: '/breakingnewspanel',
    element: <PrivateRoute><BreakingNewsPanel></BreakingNewsPanel></PrivateRoute>,
  },
  {
    path: '/latestnewspanel',
    element: <PrivateRoute><LatestNewsPanel></LatestNewsPanel></PrivateRoute>,
  },
  {
    path: '/addnews',
    element: <PrivateRoute><AddNews></AddNews></PrivateRoute>,
  },
  {
    path: '/addnewsbn',
    element: <PrivateRoute><AddNewsBn></AddNewsBn></PrivateRoute>,
  },
  {
    path: '/addnewsbrken',
    element: <PrivateRoute><AddNewsBrkEn></AddNewsBrkEn></PrivateRoute>,
  },
  {
    path: '/addnewsbrkbn',
    element: <PrivateRoute><AddNewsBrkBn></AddNewsBrkBn></PrivateRoute>,
  },

 ] 
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
  <AuthProvider>
    <RouterProvider router={router} />
 </AuthProvider> 
 </React.StrictMode> 
); 
