import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { useProducts } from "./hooks/useProducts";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import "./assets/style.css";

/**
 * App 主組件
 * 功能：實現登入驗證、產品列表顯示、產品細節查看
 */
function App() {
  const { isAuth, loading: authLoading, error: authError, login, checkLogin } = useAuth();
  const { products, loading: productsLoading, fetchProducts } = useProducts();
  const [tempProduct, setTempProduct] = useState(null);

  /**
   * 處理登入表單送出
   */
  const handleLogin = async (formData) => {
    const result = await login(formData);
    if (result.success) {
      fetchProducts();
    }
  };

  /**
   * 處理驗證登入狀態按鈕
   */
  const handleCheckLogin = async () => {
    const isValid = await checkLogin();
    if (isValid) {
      alert("Token 驗證成功！您仍處於登入狀態");
    } else {
      alert("Token 驗證失敗，請重新登入");
    }
  };

  return (
    <>
      {isAuth ? (
        <div className="container">
          <div className="row mt-5">
            {/* 左側：產品列表區域 */}
            <div className="col-md-6">
              <button
                className="btn btn-danger mb-5"
                type="button"
                onClick={handleCheckLogin}
              >
                確認是否登入
              </button>

              <ProductList
                products={products}
                loading={productsLoading}
                onViewDetail={setTempProduct}
              />
            </div>

            {/* 右側：單一產品細節區域 */}
            <div className="col-md-6">
              <ProductDetail product={tempProduct} />
            </div>
          </div>
        </div>
      ) : (
        <LoginForm
          onSubmit={handleLogin}
          loading={authLoading}
          error={authError}
        />
      )}
    </>
  );
}

export default App;
