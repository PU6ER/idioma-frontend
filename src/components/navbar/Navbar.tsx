import { MessageCircle, Settings, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link to='/contacts' className='navbar-link'>
				<UserRound />
				<span>Контакты</span>
			</Link>

			<Link to='/' className='navbar-link'>
				<MessageCircle />
				<span>Чаты</span>
			</Link>
			<Link to='/settings' className='navbar-link'>
				<Settings />
				<span>Настройки</span>
			</Link>
		</nav>
	)
}

export default Navbar
