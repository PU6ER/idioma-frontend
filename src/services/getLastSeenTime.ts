import { Timestamp } from 'firebase/firestore'

export function getLastSeenTime(lastSeen: Timestamp) {
	const now = new Date()
	const lastSeenDate = new Date(
		lastSeen.seconds * 1000 + lastSeen.nanoseconds / 1000000
	)
	const diffMs = now.getTime() - lastSeenDate.getTime()
	const diffMins = Math.round(diffMs / 60000)
	const diffHours = Math.round(diffMs / 3600000)

	if (diffMins < 60) {
		return `Был(а) в сети ${diffMins} минут назад`
	} else if (diffHours < 12) {
		return `Был(а) в сети ${diffHours} часов назад`
	} else {
		return 'Не в сети'
	}
}
