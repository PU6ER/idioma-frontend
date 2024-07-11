import { CirclePlus, PencilLine } from 'lucide-react'
import ChatCard from '../../components/chat-card/ChatCard'
import { useContacts } from '../../hooks/useContacts'
import './HomePage.scss'

const HomePage = () => {
	const { data } = useContacts('aOKXSmCVqHydL0dbH8xl')
	console.log(data)
	return (
		<div>
			<div className='topbar'>
				<div className='topbar-first'>
					<button className='change'>Изм.</button>
					<span>Чаты</span>
					<div className='adjust'>
						<button>
							<CirclePlus />
						</button>

						<button>
							<PencilLine />
						</button>
					</div>
				</div>
				<div className=''></div>
				<div className=''></div>
				<div className=''></div>
			</div>
			<div className='hero'>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
					<ChatCard key={item} />
				))}
			</div>
		</div>
	)
}

export default HomePage
