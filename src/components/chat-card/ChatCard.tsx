import { CheckCheck } from 'lucide-react'
import './ChatCard.scss'
const ChatCard = () => {
	return (
		<div className='card-container'>
			<div className='image'>
				<img src='avatar.jpg' alt='avatar' />
			</div>
			<div className='text'>
				<div className='text-top'>
					<span>Влад</span>
					<div className='check'>
						<div>
							<CheckCheck size={14} />
						</div>
						<span>11:20</span>
					</div>
				</div>
                
				<div className='message'>
					<span>Сообщение</span>
				</div>
			</div>
		</div>
	)
}

export default ChatCard
