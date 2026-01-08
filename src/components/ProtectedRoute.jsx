import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * 受保護的路由組件
 * 如果使用者未登入，自動重導向到登入頁面
 */
const ProtectedRoute = ({ children, isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
