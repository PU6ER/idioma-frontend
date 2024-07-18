import { ArrowUp, ChevronLeft, Paperclip } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProfile } from '../../hooks/useProfile'

import { getLastSeenTime } from '../../services/getLastSeenTime'
import './ChatPage.scss'
const ChatPage = () => {
	let { userId } = useParams()
	const navigate = useNavigate()

	console.log('userId', userId)
	const { data, isLoading } = useProfile(userId ?? '')

	return (
		<div className='chat-page'>
			<div className='chat-page__header'>
				<button className='chat-page__back-btn' onClick={() => navigate(-1)}>
					<ChevronLeft size={30} />
				</button>
				<div className='chat-page__title'>
					<span className='chat-page__heading'>{data?.display_name}</span>
					<span className='chat-page__caption'>
						{data?.last_seen && getLastSeenTime(data?.last_seen)}
					</span>
				</div>
				<img src={data?.photo_url} alt='avatar' className='chat-page__img' />
			</div>
			<div></div>
			<div className='chat-page__footer'>
				<div className='chat-page__add-btn'>
					<Paperclip />
				</div>
				<form className='chat-page__form'>
					<div className='chat-page__input-container'>
						<input type='text' className='chat-page__input' />
					</div>
				</form>
				<div className='chat-page__send-btn'>
					<ArrowUp />
				</div>
			</div>
		</div>
	)
}

export default ChatPage
