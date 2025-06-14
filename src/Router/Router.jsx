import { createBrowserRouter,} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AllPackages from "../Page/All-Packages/AllPackages";
import PackageDetails from "../Page/Package-Details/PackageDetails";
import AddPackage from "../Page/Add-Package/AddPackage";
import ManageMyPackages from "../Page/Manage-my-packages/ManageMyPackages";
import MyBooking from "../Page/My-Booking/MyBooking";
import About from "../Page/About-us/About";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Error from "../Page/404-Not-found/Error";
import PrivateRoute from "../Route/PrivateRoute";
import PackageBook from "../PackageBook/PackageBook";
import UpdatePackage from "../Page/Manage-my-packages/UpdatePackge";




export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/packages',
            Component:AllPackages
        },
        {
            path:'/packages/:id',
            loader:({params})=>fetch(`http://localhost:3000/packages/${params.id}`),
            element:<PrivateRoute><PackageDetails/></PrivateRoute>
        },
        {
            path:'/addPackage',
            element:<PrivateRoute><AddPackage/></PrivateRoute>
        },
        {
            path:'/managePackages',
            element:<PrivateRoute><ManageMyPackages/></PrivateRoute>
        },
        {
            path:'/updatePackage/:id',
            element:<PrivateRoute><UpdatePackage/></PrivateRoute>
        },
        {  
            path:'/booking/:id',
            loader:({params})=>fetch(`http://localhost:3000/packages/${params.id}`),
            element:<PrivateRoute><PackageBook/></PrivateRoute>,
            

        },
        {
            path:'/myBookings',
            element:<PrivateRoute><MyBooking/></PrivateRoute>
        },
        {
            path:'/about',
            Component:About
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/register',
            Component:Register
        },
    ]
  },
  {
      path: "/*",
      Component:Error,
    },
]);