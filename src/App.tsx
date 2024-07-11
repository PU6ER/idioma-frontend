import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import Layout from './pages/layout/Layout'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
				</Route>

				<Route path='/dashboard'></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
