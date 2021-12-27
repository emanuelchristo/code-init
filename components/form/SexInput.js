export default function SexInput({ error }) {
	return (
		<fieldset>
			<label className='text-sm'>Sex</label>
			<div className='flex items-center gap-4 py-2'>
				<div className='flex items-center gap-2'>
					<input type='radio' id='male' name='sex' value='male' checked />
					<label htmlFor='male'>Male</label>
				</div>
				<div className='flex items-center gap-2'>
					<input type='radio' id='female' name='sex' value='female' />
					<label htmlFor='female'>Female</label>
				</div>
				<div className='flex items-center gap-2'>
					<input type='radio' id='preferNot' name='sex' value='preferNot' />
					<label htmlFor='preferNot'>Prefer not to say</label>
				</div>
			</div>
		</fieldset>
	)
}
