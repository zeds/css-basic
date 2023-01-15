import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsSlice } from './features/products/productsSlice'

ReactDOM.createRoot(document.getElementById('root'))
	.render(
		<React.StrictMode>
			<ApiProvider api={productsSlice}>
				<App />
			</ApiProvider>
		</React.StrictMode>,
)
