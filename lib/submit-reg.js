import { collection, addDoc } from 'firebase/firestore'
import { db } from 'lib/firebase'

function submitReg(form) {
	return new Promise(async (resolve, reject) => {
		try {
			const doc = { ...form, createdOn: new Date().toJSON() }
			doc.dob = doc.dob.toJSON()
			const docRef = await addDoc(collection(db, 'register'), doc)
			resolve(docRef.id)
		} catch (e) {
			reject(e)
		}
	})
}

export { submitReg }
