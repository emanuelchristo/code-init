import Head from 'next/head'

import RegForm from 'components/RegForm'

export default function register() {
	return (
		<>
			<Head>
				<title>Register - Code.Init()</title>
			</Head>
			<div className='flex flex-col justify-center min-h-screen sm:min-h-fit'>
				<div className='h-20 shrink-0'></div>
				<div className='content w-full min-h-fit gap-12 py-12 flex items-center justify-between md:flex-col-reverse md:pt-6 md:gap-8'>
					{/* LEFT SIDE */}
					<div className='flex flex-col gap-14 w-1/2 md:w-full  sm:gap-10'>
						<h1 className='text-7xl font-semibold lg:text-6xl sm:text-5xl'>register_</h1>
						<RegForm />
					</div>

					{/* RIGHT SIDE */}
					<div className='bg-teal-600 image' style={{ backgroundImage: 'url(/register-image.webp)' }}></div>
				</div>
			</div>
		</>
	)
}
