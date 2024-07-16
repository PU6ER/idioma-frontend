import { CirclePlus, PencilLine } from 'lucide-react'
import ChatCard from '../../components/chat-card/ChatCard'
import './HomePage.scss'

const HomePage = () => {
	return (
		<div>
			<div className='topbar'>
				<div className='topbar__first'>
					<button className='topbar__add-btn'>Изм.</button>
					<span>Чаты</span>
					<div className='topbar__adjust'>
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
