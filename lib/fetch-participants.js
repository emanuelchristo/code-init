import { db } from 'lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { formatDistanceToNow } from 'date-fns'

export function fetchParticipants() {
	return new Promise(async (resolve, reject) => {
		try {
			const participants = []
			const querySnapshot = await getDocs(collection(db, 'register'))
			querySnapshot.forEach((doc) => {
				const data = doc.data()
				participants.push({
					name: data.name,
					joinedDate: data.joinedOn,
					joined: formatDistanceToNow(new Date(data.joinedOn), { addSuffix: true }),
				})
			})
			participants.sort((a, b) => (a.joinedDate < b.joinedDate ? 1 : -1))
			resolve(participants)
		} catch (err) {
			reject(err)
		}
	})
}
