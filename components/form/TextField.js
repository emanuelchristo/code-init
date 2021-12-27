export default function TextField({ name, label, placeholder, error, onChange, value }) {
	return (
		<fieldset className='flex flex-col gap-2'>
			{label && <label className='text-sm'>{label}</label>}
			<input
				className={`bg-gray-200 p-4 outline-violet-600 ${!!error && 'bg-red-100 placeholder:text-red-300'}`}
				type='text'
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error && <p className='text-red-600 text-sm'>{error}</p>}
		</fieldset>
	)
}
