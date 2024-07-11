import { useQuery } from '@tanstack/react-query'
import { getContacts } from '../services/firebase/firebaseService'

export function useContacts(userId: string) {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['contacts'],
		queryFn: () => getContacts(userId),
	})
	return { data, isLoading, isSuccess }
}
