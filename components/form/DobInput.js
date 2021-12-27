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
for (let i = 1997; i <= 2002; i++) {
	years.push({ title: i, value: i })
}

export default function DobInput({ error }) {
	return (
		<fieldset className='flex flex-col gap-2'>
			<label className='text-sm'>Date of birth</label>
			<div className='flex gap-4'>
				<select className='bg-gray-200 p-4 outline-violet-600 flex-1' name='day'>
					{days.map((option, index) => (
						<option key='index' value={option.value}>
							{option.title}
						</option>
					))}
				</select>
				<select className='bg-gray-200 p-4 outline-violet-600 flex-1' name='month'>
					{months.map((option, index) => (
						<option key='index' value={option.value}>
							{option.title}
						</option>
					))}
				</select>
				<select className='bg-gray-200 p-4 outline-violet-600 flex-1' name='year'>
					{years.map((option, index) => (
						<option key='index' value={option.value}>
							{option.title}
						</option>
					))}
				</select>
			</div>
			{error && <p className='text-red-600 text-sm'>{error}</p>}
		</fieldset>
	)
}
