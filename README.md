# React Week 2 - 產品管理系統

一個使用 React + Vite 建立的產品管理系統，提供登入驗證、產品列表顯示及產品細節查看功能。

## 專案特色

- 使用 React 19 與 Vite 7 建立
- 採用自定義 Hooks 管理狀態 (useAuth, useProducts)
- 組件化架構，提高程式碼可維護性
- 響應式設計，支援行動裝置瀏覽
- 完善的錯誤處理與載入狀態
- 美觀的 UI 設計，使用 Bootstrap 5

## 技術架構

### 核心技術
- **React** 19.2.3 - 前端框架
- **Vite** 7.3.0 - 建構工具
- **Axios** 1.13.2 - HTTP 請求
- **Bootstrap** 5.3.8 - UI 框架

### 專案結構
```
src/
├── components/          # React 組件
│   ├── LoginForm.jsx   # 登入表單組件
│   ├── ProductList.jsx # 產品列表組件
│   └── ProductDetail.jsx # 產品細節組件
├── hooks/              # 自定義 Hooks
│   ├── useAuth.js      # 認證管理 Hook
│   └── useProducts.js  # 產品管理 Hook
├── assets/             # 靜態資源
│   └── style.css       # 樣式檔案
├── App.jsx             # 主應用程式組件
└── main.jsx            # 應用程式入口點
```

## 開始使用

### 環境需求
- Node.js 16.0 或以上版本
- npm 或 yarn

### 安裝步驟

1. 安裝相依套件
```bash
npm install
```

2. 設定環境變數
複製 `.env.example` 並重新命名為 `.env`，然後填入您的 API 路徑：
```env
VITE_API_BASE=https://ec-course-api.hexschool.io/v2
VITE_API_PATH=your_api_path_here
```

3. 啟動開發伺服器
```bash
npm run dev
```

4. 開啟瀏覽器訪問 `http://localhost:5173`

## 可用指令

```bash
npm run dev      # 啟動開發伺服器
npm run build    # 建置生產環境版本
npm run preview  # 預覽建置結果
npm run lint     # 執行 ESLint 檢查
```

## 功能說明

### 1. 使用者登入
- Email 與密碼驗證
- Token 儲存於 Cookie
- 登入狀態檢查功能
- 完善的錯誤訊息顯示

### 2. 產品列表
- 顯示所有產品
- 產品啟用狀態標示
- 價格資訊顯示
- 載入狀態提示

### 3. 產品細節
- 產品完整資訊
- 主圖與副圖展示
- 價格對比顯示
- 響應式圖片預覽

## 開發重點

### 自定義 Hooks
- **useAuth**: 管理使用者認證狀態、登入、登出功能
- **useProducts**: 處理產品資料的取得與狀態管理

### 組件設計
- 採用 Presentational 與 Container 組件分離
- Props 驅動的可重用組件
- 統一的錯誤處理機制

### 樣式設計
- 使用 CSS 自定義變數
- 響應式設計支援多種裝置
- 平滑的動畫與過渡效果

## 專案優化

本專案已進行以下優化：
- ✅ 組件化重構，提高程式碼可維護性
- ✅ 自定義 Hooks 分離業務邏輯
- ✅ 完善的錯誤處理與使用者回饋
- ✅ 響應式設計與美化 UI
- ✅ 環境變數管理
- ✅ 載入狀態提示

## 授權

© 2025 - 六角學院

## 相關連結

- [Vite 官方文件](https://vitejs.dev/)
- [React 官方文件](https://react.dev/)
- [Bootstrap 官方文件](https://getbootstrap.com/)
