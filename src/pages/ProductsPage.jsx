import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import { useAuthContext } from "../context/AuthContext";
import { useProductsContext } from "../context/ProductsContext";

/**
 * 產品管理頁面
 */
const ProductsPage = () => {
  const navigate = useNavigate();
  const { checkLogin, logout } = useAuthContext();
  const { products, loading, fetchProducts } = useProductsContext();
  const [tempProduct, setTempProduct] = useState(null);

  /**
   * 頁面載入時取得產品列表
   */
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 處理驗證登入狀態
   */
  const handleCheckLogin = async () => {
    const isValid = await checkLogin();
    if (isValid) {
      alert("Token 驗證成功！您仍處於登入狀態");
    } else {
      alert("Token 驗證失敗，請重新登入");
    }
  };

  /**
   * 處理登出
   */
  const handleLogout = () => {
    if (window.confirm("確定要登出嗎？")) {
      logout();
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="container">
      {/* 頁面標題與操作列 */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3 mb-0">產品管理系統</h1>
            <div className="btn-group">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleCheckLogin}
              >
                驗證登入狀態
              </button>
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={handleLogout}
              >
                登出
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 產品列表與細節 */}
      <div className="row">
        {/* 左側：產品列表 */}
        <div className="col-md-6">
          <ProductList
            products={products}
            loading={loading}
            onViewDetail={setTempProduct}
          />
        </div>

        {/* 右側：產品細節 */}
        <div className="col-md-6">
          <ProductDetail product={tempProduct} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
