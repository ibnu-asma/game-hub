import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../components/NavBar";


export const ErrorPage = () => {
   const error = useRouteError();
   
  return (
    <>
    <NavBar />
    <div>{isRouteErrorResponse(error)? "Page Not Found" : "An unecpected error occured"}</div>
    </>
  )
}
