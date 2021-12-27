import { useState } from 'react'
import { useRouter } from 'next/router'
import { validateReg } from 'lib/validate-reg'
import { submitReg } from 'lib/submit-reg'
import { branchOptions } from 'lib/constants'
import { minDob } from 'lib/minMaxDob'

import TextField from 'components/form/TextField'
import Select from 'components/form/Select'
import DobInput from 'components/form/DobInput'
import SexInput from 'components/form/SexInput'
import { CgSpinner } from 'react-icons/cg'

export default function RegForm() {
	const [form, setForm] = useState({
		name: '',
		dob: minDob().date,
		rollNo: '',
		branch: branchOptions[0]?.value,
		mobileNo: '',
		email: '',
		sex: 'male',
	})
	const [formErrors, setFormErrors] = useState({})
	const [hasErrors, setHasErrors] = useState(false)
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	function handleSubmit(e) {
		e.preventDefault()
		setLoading(true)
		setHasErrors(false)
		setFormErrors({})
		validateReg(form)
			.then((valid) => {
				submitReg(form)
					.then(() => router.push('/register-status?status=success'))
					.catch(() => router.push('/register-status?status=failure'))
			})
			.catch((errors) => {
				setFormErrors(errors)
				setHasErrors(true)
				setLoading(false)
			})
	}

	return (
		<form className='flex flex-col gap-6 pb-8 w-full md:pb-0' onSubmit={handleSubmit}>
			<TextField name='name' label='Name' placeholder='Enter your name' error={formErrors?.name} value={form?.name} onChange={handleChange} />
			<DobInput error={formErrors?.dob} value={form.dob} onChange={handleChange} />
			<TextField
				name='rollNo'
				label='Roll no.'
				placeholder='Enter your roll no.'
				error={formErrors?.rollNo}
				value={form?.rollNo}
				onChange={handleChange}
			/>
			<Select
				name='branch'
				label='Branch'
				placeholder='Pick your branch'
				options={branchOptions}
				error={formErrors?.branch}
				value={form?.branch}
				onChange={handleChange}
			/>
			<TextField
				name='mobileNo'
				label='Mobile no.'
				placeholder='Enter your mobile no.'
				error={formErrors?.mobileNo}
				value={form?.mobileNo}
				onChange={handleChange}
			/>
			<TextField
				name='email'
				label='Email'
				placeholder='Enter your email'
				error={formErrors?.email}
				value={form?.email}
				onChange={handleChange}
			/>
			<SexInput value={form?.sex} onChange={handleChange} error={formErrors?.sex} />
			{hasErrors && <p className='text-red-600'>Form has some errors</p>}
			<button
				className='flex items-center justify-center gap-2 bg-black text-white  w-36 h-14 hover:bg-violet-700 active:bg-violet-800'
				disabled={loading}
			>
				{loading && <CgSpinner className='text-white text-2xl animate-spin mt-px' />}
				Register
			</button>
		</form>
	)
}
