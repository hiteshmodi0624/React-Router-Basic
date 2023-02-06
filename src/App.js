import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<HomePage/>},//path:""
      {path:'products',element:<ProductsPage/>},
      {path:'products/:productId',element:<ProductDetails/>},
    ],
    
  },
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
