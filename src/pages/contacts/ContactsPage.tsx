import { CirclePlus } from 'lucide-react'
import ContactCard from '../../components/contact-card/ContactCard'
import { useContacts } from '../../hooks/useContacts'
import './ContactsPage.scss'

const ContactsPage = () => {
	const { data, isLoading, isSuccess } = useContacts('aOKXSmCVqHydL0dbH8xl')
	console.log(data)
	return (
		<div>
			<div className='topbar'>
				<div className='topbar__first'>
					<button className='topbar__sort-btn'></button>
					<span>Контакты</span>
					<div className='topbar__add-btn'>
						<button>
							<CirclePlus />
						</button>
					</div>
				</div>
			</div>
			<div className='hero'>
				{data?.map(contact => (
					<ContactCard contact={contact} key={contact.id} />
				))}
			</div>
		</div>
	)
}

export default ContactsPage
