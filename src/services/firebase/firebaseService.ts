import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	Timestamp,
	where,
} from 'firebase/firestore'
import { IContacts } from '../../types/contacts.types'
import { IUser } from '../../types/users.types'
import { db } from './firebaseConfig'

export async function getContacts(userId: string): Promise<IContacts[]> {
	const q = query(collection(db, 'contacts'), where('user_id', '==', userId))
	try {
		const docSnapshot = await getDocs(q)
		return docSnapshot.docs.map(
			doc => ({ id: doc.id, ...doc.data() } as IContacts)
		)
	} catch (error) {
		console.error('Ошибка получения списка контактов', error)
		return []
	}
}

export async function getProfile(userId: string): Promise<IUser> {
	const docRef = doc(db, 'users', userId)
	try {
		const docSnapshot = await getDoc(docRef)
		if (docSnapshot.exists()) {
			return { ...docSnapshot.data() } as IUser
		} else {
			console.log('No such document!')
			return {
				bio: '',
				created_at: {} as Timestamp,
				last_seen: {} as Timestamp,
				display_name: '',
				email: '',
				phone_number: '',
				photo_url: '',
				username: '',
			} as IUser
		}
	} catch (error) {
		console.error('Ошибка получения данных о пользователе', error)
		return {
			bio: '',
			created_at: {} as Timestamp,
			last_seen: {} as Timestamp,
			display_name: '',
			email: '',
			phone_number: '',
			photo_url: '',
			username: '',
		} as IUser
	}
}
