import { useState } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

/**
 * 自定義認證 Hook
 * 處理使用者登入、登出及認證狀態管理
 */
export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * 登入函式
   */
  const login = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_BASE}/admin/signin`, formData);
      const { token, expired } = response.data;

      // 儲存 token 到 cookie
      document.cookie = `hexToken=${token};expires=${new Date(expired)};`;

      // 設定預設請求標頭
      axios.defaults.headers.common.Authorization = token;

      setIsAuth(true);
      return { success: true };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "登入失敗，請稍後再試";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  /**
   * 檢查登入狀態
   */
  const checkLogin = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("hexToken="))
        ?.split("=")[1];

      if (!token) {
        console.log("未找到 token");
        return false;
      }

      axios.defaults.headers.common.Authorization = token;

      const res = await axios.post(`${API_BASE}/api/user/check`);
      console.log("登入驗證成功:", res.data);
      return true;
    } catch (err) {
      console.error("登入驗證失敗:", err.response?.data?.message);
      return false;
    }
  };

  /**
   * 登出函式
   */
  const logout = () => {
    document.cookie = "hexToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    delete axios.defaults.headers.common.Authorization;
    setIsAuth(false);
  };

  return {
    isAuth,
    loading,
    error,
    login,
    checkLogin,
    logout,
  };
};
