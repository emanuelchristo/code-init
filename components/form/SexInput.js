import { useState, useEffect } from 'react'

export default function SexInput({ value, onChange, error }) {
	const [checked, setChecked] = useState(value)

	useEffect(() => {
		setChecked(value)
	}, [value])

	return (
		<fieldset>
			<label className='text-sm'>Sex</label>
			<div className='flex items-center gap-x-4 gap-y-2 py-2 flex-wrap'>
				<div className='flex items-center gap-2'>
					<input type='radio' id='male' name='sex' value='male' checked={checked == 'male'} onChange={onChange} />
					<label htmlFor='male'>Male</label>
				</div>
				<div className='flex items-center gap-2'>
					<input type='radio' id='female' name='sex' value='female' checked={checked == 'female'} onChange={onChange} />
					<label htmlFor='female'>Female</label>
				</div>
				<div className='flex items-center gap-2'>
					<input type='radio' id='preferNot' name='sex' value='preferNot' checked={checked == 'preferNot'} onChange={onChange} />
					<label htmlFor='preferNot'>Prefer not to say</label>
				</div>
			</div>
			{error && <p className='text-red-600 text-sm'>{error}</p>}
		</fieldset>
	)
}
