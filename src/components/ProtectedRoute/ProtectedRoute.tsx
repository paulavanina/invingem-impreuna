import { Navigate } from "react-router-dom";

const ProtectedRoute=({ children }:any)=> {
    const isLoggedIn = Boolean(localStorage.getItem("token")); // sau altă metodă de verificare a autentificării
    return isLoggedIn ? children : <Navigate to="/logIn" />;
  }
export default ProtectedRoute;