import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Footer from "./components/Footer.js";
import SignIn from "./components/signIn.js";
import LogIn from "./components/logIn.js";
import Cart from "./components/Cart.js";
import RestaurentMenues from "./components/RestaurentMenues.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer.js";
import { UserProvider } from "./utils/UserContext";
import { Provider } from "react-redux";
const About = lazy(() => import("./components/About.js"));
import store from "./utils/Storage.js";
const InstaMart = lazy(() => import("./components/InstaMart.js"));
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <UserProvider>
          <Header></Header>
          <div className="bodyContainer">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </UserProvider>
      </div>
      <ToastContainer
      toastClassName="dark-toast"
      bodyClassName="dark-toast-body"
    />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={"Loding About .........."}>
            <About />
          </Suspense>
        ),
        // children: [
        //     {
        //       path: "profile",
        //       element: <Profile />
        //     }
        // ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenues />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback=<Shimmer />>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(<)
root.render(<RouterProvider router={appRouter} />);
// root.render(<About/>);
