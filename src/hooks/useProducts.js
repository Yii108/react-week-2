import { useState } from "react";
import { apiClient, API_ENDPOINTS } from "../config/api";

/**
 * 自定義產品管理 Hook
 * 處理產品列表的取得與狀態管理
 */
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * 取得產品列表
   */
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.get(API_ENDPOINTS.PRODUCTS);
      setProducts(response.data.products);
      return { success: true, data: response.data.products };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "取得產品列表失敗";
      setError(errorMessage);
      console.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
  };
};
