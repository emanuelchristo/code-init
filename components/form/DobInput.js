import { useState, useEffect } from 'react'
import { minDob, maxDob } from 'lib/minMaxDob'

const days = []
for (let i = 1; i <= 31; i++) {
	days.push({ title: i, value: i })
}

const months = [
	{ title: 'Jan', value: '1' },
	{ title: 'Feb', value: '2' },
	{ title: 'Mar', value: '3' },
	{ title: 'Apr', value: '4' },
	{ title: 'May', value: '5' },
	{ title: 'Jun', value: '6' },
	{ title: 'Jul', value: '7' },
	{ title: 'Aug', value: '8' },
	{ title: 'Sep', value: '9' },
	{ title: 'Oct', value: '10' },
	{ title: 'Nov', value: '11' },
	{ title: 'Dec', value: '12' },
]

const years = []
for (let i = minDob().year; i <= maxDob().year; i++) {
	years.push({ title: i, value: i })
}

export default function DobInput({ error, value, onChange }) {
	const [dob, setDob] = useState(minDob())

	useEffect(() => {
		let dob = minDob()
		if (value instanceof Date) {
			dob = {
				day: value?.getDate(),
				month: value?.getMonth() + 1,
				year: value?.getFullYear(),
			}
		}
		setDob(dob)
	}, [value])

	function handleChange(e) {
		const newDob = { ...dob, [e.target.name]: e.target.value }
		onChange({ target: { name: 'dob', value: new Date(`${newDob.year}-${newDob.month}-${newDob.day}`) } })
	}

	return (
		<fieldset className='flex flex-col gap-2'>
			<label className='text-sm'>Date of birth</label>
			<div className='flex gap-4'>
				<select className='bg-gray-200 p-4 outline-violet-600 flex-1' name='day' value={dob?.day} onChange={handleChange}>
					{days.map((option, index) => (
						<option key={index} value={option.value}>
							{option.title}
						</option>
					))}
				</select>
				<select className='bg-gray-200 p-4 outline-violet-600 flex-1' name='month' value={dob?.month} onChange={handleChange}>
					{months.map((option, index) => (
						<option key={index} value={option.value}>
							{option.title}
						</option>
					))}
				</select>
				<select className='bg-gray-200 p-4 outline-violet-600 flex-1' name='year' value={dob?.year} onChange={handleChange}>
					{years.map((option, index) => (
						<option key={index} value={option.value}>
							{option.title}
						</option>
					))}
				</select>
			</div>
			{error && <p className='text-red-600 text-sm'>{error}</p>}
		</fieldset>
	)
}
