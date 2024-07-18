import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../services/firebase/firebaseService'

export function useProfile(userId: string) {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['profile', userId],
		queryFn: () => getProfile(userId),
	})
	return { data, isLoading, isSuccess }
}
