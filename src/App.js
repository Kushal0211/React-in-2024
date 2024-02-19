import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import UserContext from "./utils/UserContext";



const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
       const data = {
        name : "Kushal Pandita",
       }

       setUserName(data.name);
    }, [])

    return (

        <UserContext.Provider value={{userLoggedIn: userName}}>


        <div className="app">
        <UserContext.Provider value={{userLoggedIn: userName}}>
            <Header />
        </UserContext.Provider>
            <Outlet />
        </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />
            }, 
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restuarants/:resId",
                element: <RestuarantMenu />
            },
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />)