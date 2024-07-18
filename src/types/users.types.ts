import { Timestamp } from 'firebase/firestore'

export interface IUser {
    id: string
	display_name: string
	username: string
	email: string
	phone_number: string
	photo_url: string
	bio: string
	created_at: Timestamp
	last_seen: Timestamp
}
