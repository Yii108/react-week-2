import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";

/**
 * 認證上下文
 */
const AuthContext = createContext(null);

/**
 * 認證提供者組件
 */
export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * 使用認證上下文的 Hook
 */
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
};
