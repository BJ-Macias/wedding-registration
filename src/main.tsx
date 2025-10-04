import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider, theme } from 'antd'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#E4B4EC',
        colorBgContainer: '#ece2fd',
        colorText: '#A24BA2',
      },
      components: {
        Input: {
          colorText: '#D59BE1',
          colorTextPlaceholder: '#C682D4',
          colorBorder: '#C682D4'
        },
      }
    }}
  >
    <App />
  </ConfigProvider>
  // </StrictMode>,
)
