import { Link } from 'react-router-dom'
import { useProfile } from '../../hooks/useProfile'
import { getLastSeenTime } from '../../services/getLastSeenTime'
import { IContacts } from '../../types/contacts.types'
import './ContactCard.scss'
interface IContactParam {
	contact: IContacts
}
const ContactCard = ({ contact }: IContactParam) => {
	const { data, isLoading, isSuccess } = useProfile(contact.contact_id)
	console.log('contactId', contact.contact_id)
	console.log('profile ' + data?.id, data)

	return (
		<Link to={`/chats/` + data?.id} className='contact-card'>
			<div className='contact-card__photo'>
				<img src={data?.photo_url} alt='photo' className='contact-card__img' />
			</div>
			<div className='contact-card__text'>
				<span>{data?.display_name}</span>
				<span className='contact-card__caption'>
					{data && getLastSeenTime(data.last_seen)}
				</span>
			</div>
		</Link>
	)
}

export default ContactCard
