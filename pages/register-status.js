import { useRouter } from 'next/router'

import Head from 'next/head'

export default function RegisterStatus() {
	const router = useRouter()

	return (
		<>
			<Head>
				<title>Register Status - Code.Init()</title>
			</Head>
			<div className='flex flex-col justify-center min-h-screen'>
				<div className='h-20 shrink-0'></div>
				<div className='content w-full min-h-fit gap-12 py-12 flex items-center justify-between md:flex-col-reverse md:pt-6 md:gap-8'>
					{router.query?.status == 'success' && (
						<div className='flex flex-col gap-8 items-center mx-auto text-center'>
							<h1 className='text-3xl font-semibold'>Registration successful</h1>
							<img src='/success.svg' className='w-40' />
							<p className='w-full max-w-xs '>You will be contacted by us with more info about the hackathon</p>
						</div>
					)}
					{router.query?.status == 'failure' && (
						<div className='flex flex-col gap-8 items-center mx-auto text-center'>
							<h1 className='text-3xl font-semibold'>Registration failed</h1>
							<img src='/failure.svg' className='w-40' />
							<p className='w-full max-w-xs '>Please try again. Contact us if you have any queries</p>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
