// 引入 React 的 StrictMode 組件，用於檢測潛在問題（開發模式）
import { StrictMode } from 'react'
// 引入 React 18 的 createRoot API，用於建立 React 根節點
import { createRoot } from 'react-dom/client'
// 引入 Bootstrap 的 CSS 樣式檔案
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入 Bootstrap 的 JavaScript 功能（包含互動元件如 modal、dropdown 等）
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 引入主要的 App 組件
import App from './App.jsx'

/**
 * 應用程式入口點
 * 1. 取得 HTML 中 id 為 'root' 的 DOM 元素
 * 2. 使用 createRoot 建立 React 根節點
 * 3. 在 StrictMode 中渲染 App 組件
 *
 * StrictMode 用途：
 * - 識別不安全的生命週期方法
 * - 關於使用過時 API 的警告
 * - 檢測意外的副作用
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
