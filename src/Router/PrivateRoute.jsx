import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { LuLoaderCircle } from "react-icons/lu";

const PrivateRoute = ({ children }) => {
  const { user, token, loading } = useAuth();

  if (loading) return <LuLoaderCircle />;

  if (token || user) return children;

  return <Navigate to="/auth/login" state={location?.pathname} replace />;
};

export default PrivateRoute;
