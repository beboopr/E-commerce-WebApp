// import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Products from "./Products/Products";
// import "./app.scss"
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
