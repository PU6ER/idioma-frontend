import { collection, getDocs, query, where } from 'firebase/firestore'
import { IContacts } from '../../types/contacts.types'
import { db } from './firebaseConfig'

export async function getContacts(userId: string) {
	const q = query(collection(db, 'contacts'), where('user_id', '==', userId))
	try {
		const docSnapshot = await getDocs(q)
		return docSnapshot.docs.map(
			doc => ({ id: doc.id, ...doc.data() } as IContacts)
		)
	} catch (error) {
		return error
	}
}
