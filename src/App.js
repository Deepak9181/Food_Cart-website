import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import { useContext } from "react";
import Userdata from "./utilis/userdata";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
import Cart from "./Components/Cart";


// const {loginUser}=useContext(Userdata);

// const[user,setuser]=usestate();

const Menu = lazy(()=>import( "./Components/Menu" ))

const App = () => {
  return (
    // <Userdata.Provider value={{loginUser:"Deepak"}}>
    <Provider store={appStore}>
      <div className="App-container">
        <Header />
        <Outlet/>
      </div>
    </Provider>
    // </Userdata.Provider>
  );
};

const routerele= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
      path:"/about",
      element:<About/>
      },
      {
      path:"/Contact",
      element:<Contact/>
      },
      {
      path:"/restaurant/:id",
      element:<Suspense><Menu/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
  ],
    errorElement:<Error/>
  }
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routerele}/>);
