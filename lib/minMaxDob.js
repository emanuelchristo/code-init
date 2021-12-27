import { sub } from 'date-fns'
import { MIN_AGE, MAX_AGE, HACKATHON_START } from 'lib/constants'

export function minDob() {
	let res = sub(HACKATHON_START, MAX_AGE)
	let min = { day: res.getDate(), month: res.getMonth() + 1, year: res.getFullYear() }
	res = new Date(`${min.year}-${min.month}-${min.day}`)
	return { ...min, date: res }
}

export function maxDob() {
	let res = sub(HACKATHON_START, MIN_AGE)
	let max = { day: res.getDate(), month: res.getMonth() + 1, year: res.getFullYear() }
	res = new Date(`${max.year}-${max.month}-${max.day}`)
	return { ...max, date: res }
}
