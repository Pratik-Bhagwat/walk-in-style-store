import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent.tsx";
import ProductPage from "./components/ProductPage/ProductPage.tsx";
import ShopPage from "./components/ShopPage/ShopPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./context/AuthContext.tsx";
import Cart from "./components/Cart/Cart.tsx";
import Success from "./components/Success.tsx";
import Signup from "./components/SignupForm/Signup.tsx";
import Login from "./components/LoginForm/Login.tsx";
import AboutUs from "./components/AboutUs.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainContent />,
      },
      {
        path: ":productName/:productId",
        element: <ProductPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
