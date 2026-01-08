import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useProducts } from "../hooks/useProducts";

/**
 * 產品上下文
 */
const ProductsContext = createContext(null);

/**
 * 產品提供者組件
 */
export const ProductsProvider = ({ children }) => {
  const products = useProducts();

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * 使用產品上下文的 Hook
 */
export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProductsContext must be used within ProductsProvider");
  }
  return context;
};
