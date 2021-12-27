export default function TextField({ name, label, placeholder, error }) {
	return (
		<fieldset className='flex flex-col gap-2'>
			{label && <label className='text-sm'>{label}</label>}
			<input className='bg-gray-200 p-4 outline-violet-600' type='text' name={name} placeholder={placeholder} />
			{error && <p className='text-red-600 text-sm'>{error}</p>}
		</fieldset>
	)
}
