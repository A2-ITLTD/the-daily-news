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
  { path: "/contact",
    element: <Contact></Contact>
  },
 ] 
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 
