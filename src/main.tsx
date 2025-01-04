import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import i18n from './configs/i18n.config'
import './index.css'
import router from './routes/Routes.jsx'
import store from './store/store'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<KindeProvider
				clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
				domain={import.meta.env.VITE_KINDE_DOMAIN}
				logoutUri={import.meta.env.VITE_KINDE_SITE_URL}
				redirectUri={import.meta.env.VITE_KINDE_POST_LOGOUT_REDIRECT_URL}
			>
				<Provider store={store}>
					<RouterProvider router={router} />
				</Provider>
			</KindeProvider>
		</I18nextProvider>
	</React.StrictMode>,
)
