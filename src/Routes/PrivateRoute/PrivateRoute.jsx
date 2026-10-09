import { CirclesWithBar } from "react-loader-spinner";
import { useLocation, Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <CirclesWithBar
          height="400"
          width="400"
          color="#D1A054"
          outerCircleColor="#D1A054"
          innerCircleColor="#D1A054"
          barColor="#D1A054"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
