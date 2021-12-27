import * as yup from 'yup'
import { branchOptions } from 'lib/constants'
import { minDob, maxDob } from 'lib/minMaxDob'
import { format } from 'date-fns'

const branches = []
for (let opt of branchOptions) branches.push(opt.value)
const sexes = ['male', 'female', 'preferNot']

const regSchema = yup.object().shape({
	name: yup
		.string()
		.matches(/^[^*|\":<>[\]{}`\\()';@&$]+$/, "Can't have special characters in name")
		.required('Name is required')
		.typeError('Name is required'),
	dob: yup
		.date('Invalid date of birth')
		.min(minDob().date, `DOB must be ${format(minDob().date, 'd LLL yyyy')} or later`)
		.max(maxDob().date, `DOB must be ${format(maxDob().date, 'd LLL yyyy')} or earlier`)
		.required('Date of birth is required')
		.typeError('Invalide date of birth'),
	rollNo: yup
		.string()
		.required('Roll no. is required')
		.matches(/([Bb])([12])([0-9]{5})([a-zA-Z]{2})/, 'Invalid form. eg: B123456CS')
		.length(9, 'Must be 9 characters long')
		.typeError('Invalid roll no.'),
	branch: yup.mixed().oneOf(branches, 'Choose one').required('Branch is required').typeError('Branch is required'),
	mobileNo: yup
		.string()
		.matches(/[0-9]{10}/, 'Invalid mobile no. eg: 9123456780')
		.required('Mobile no. is required')
		.typeError('Mobile no. is required'),
	email: yup.string().email('Invalid email').required('Email is required').typeError('Email is required'),
	sex: yup.mixed().oneOf(sexes, 'Choose one').required('Sex is required').typeError('Sex is required'),
})

function validateReg(form) {
	return new Promise((resolve, reject) => {
		regSchema
			.validate(form, { abortEarly: false })
			.then((valid) => resolve(valid))
			.catch((err) => {
				const errors = {}
				err.inner.forEach((error) => (errors[error.path] = error.message))
				reject(errors)
			})
	})
}

export { validateReg }
