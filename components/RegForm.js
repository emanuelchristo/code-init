import DobInput from 'components/form/DobInput'
import Select from 'components/form/Select'
import SexInput from 'components/form/SexInput'
import TextField from 'components/form/TextField'

const branchOptions = [
	{ title: 'Computer Science & Engineering', value: 'cse', default: true },
	{ title: 'Electrical & Communications Engineering', value: 'ece' },
	{ title: 'Civil Engineering', value: 'ce' },
	{ title: 'Mechanical Engineering', value: 'me' },
]

export default function RegForm() {
	return (
		<form className='flex flex-col gap-6 pb-8 w-full md:pb-0'>
			<TextField name='name' label='Name' placeholder='Enter your name' />
			<DobInput />
			<TextField name='rollNo' label='Roll no.' placeholder='Enter your roll no.' />
			<Select name='branch' label='Branch' placeholder='Pick your branch' options={branchOptions} />
			<TextField name='mobileNo' label='Mobile no.' placeholder='Enter your mobile no.' />
			<TextField name='email' label='Email' placeholder='Enter your email' />
			<SexInput />
			<button className='bg-black text-white  w-36 h-14 hover:bg-violet-700 active:bg-violet-800'>Register</button>
		</form>
	)
}
