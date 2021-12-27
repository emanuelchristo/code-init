import Head from 'next/head'

export default function contact() {
	return (
		<>
			<Head>
				<title>Contact - Code.Init()</title>
			</Head>
			<div className='flex flex-col justify-center min-h-screen sm:min-h-fit'>
				<div className='h-20 shrink-0'></div>
				<div className='content w-full min-h-fit gap-12 py-12 flex items-center justify-between md:flex-col'>
					{/* LEFT SIDE */}
					<div className='flex flex-col gap-14 w-1/2 md:w-full  sm:gap-10'>
						<h1 className='text-7xl font-semibold lg:text-6xl sm:text-5xl'>contact_</h1>
						<div>
							<p className='font-bold mb-1'>Address</p>
							<p>
								Computer Science and Engineering Association
								<br /> National Institute of Technology Calicut
								<br /> NIT Campus P.O, Kozhikode
								<br /> 683601
							</p>
						</div>
						<div>
							<p className='font-bold mb-1'>Email</p>
							<a href='mailto:csea@nitc.ac.in' className='text-blue-700 underline underline-offset-4'>
								csea@nitc.ac.in
							</a>
						</div>
					</div>

					{/* RIGHT SIDE */}
					<div className='bg-blue-600 image'></div>
				</div>
			</div>
		</>
	)
}
