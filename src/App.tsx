import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ChatPage from './pages/chat/ChatPage'
import ContactsPage from './pages/contacts/ContactsPage'
import HomePage from './pages/home/HomePage'
import Layout from './pages/layout/Layout'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='/contacts' element={<ContactsPage />} />
				</Route>
				<Route path='/chats/:userId' element={<ChatPage />} />
				<Route path='/dashboard'></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
