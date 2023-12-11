import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import i18n from './configs/i18n.config'
import './index.css'
import router from './routes/Routes.jsx'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
)
