import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Header from './components/Header'
import Contents from './components/Contents'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Header />
		<Contents />
		<Footer />
	</React.StrictMode>,
)
