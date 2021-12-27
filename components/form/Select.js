export default function Select({ name, options, label, placeholder, error }) {
	return (
		<fieldset className='flex flex-col gap-2'>
			{label && <label className='text-sm'>{label}</label>}
			<select className='bg-gray-200 p-4 outline-violet-600  overflow-ellipsis w-full' type='text' name={name} placeholder={placeholder}>
				{options.map((option, index) => (
					<option key='index' value={option.value}>
						{option.title}
					</option>
				))}
			</select>
			{error && <p className='text-red-600 text-sm'>{error}</p>}
		</fieldset>
	)
}
