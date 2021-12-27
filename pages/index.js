import { useState, useEffect } from 'react'

import Head from 'next/head'
import Link from 'next/link'

const HACKATHON_START = new Date('2022-01-05T13:30:00.000Z') // 5 Jan 2022, 7:00PM

export default function index() {
	const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

	useEffect(() => {
		countdown()
	}, [])

	function countdown() {
		setInterval(() => {
			let dateFuture = HACKATHON_START
			let dateNow = new Date()

			let seconds = Math.floor((dateFuture - dateNow) / 1000)
			let minutes = Math.floor(seconds / 60)
			let hours = Math.floor(minutes / 60)
			let days = Math.floor(hours / 24)

			hours = hours - days * 24
			minutes = minutes - days * 24 * 60 - hours * 60
			seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60

			setTimeLeft({ days, hours, minutes, seconds })
		}, 1000)
	}

	return (
		<>
			<Head>
				<title>Code.Init() - Hackathon organized by CSEA, NITC</title>
			</Head>
			<div className='flex flex-col justify-center min-h-screen sm:min-h-fit'>
				<div className='h-20 shrink-0'></div>
				<div className='content w-full min-h-fit gap-12 py-12 flex items-center justify-between md:flex-col'>
					{/* LEFT SIDE */}
					<div className='flex flex-col gap-14 w-1/2 md:w-full  sm:gap-10'>
						<div className='flex flex-col gap-6'>
							<h1 className='text-7xl font-semibold lg:text-6xl sm:text-5xl'>
								3 Day
								<br /> Hackathon
							</h1>
							<h3 className='text-xl'>Organized by CSEA, NITC</h3>
						</div>

						<div className='flex flex-col gap-4'>
							<p className='font-medium text-violet-600'>Hackthon starts in</p>
							<div className='flex gap-4 font-medium flex-wrap'>
								<p className='whitespace-nowrap'>
									<span className='text-4xl sm:text-3xl'>{timeLeft.days}</span> days
								</p>
								<p className='whitespace-nowrap'>
									<span className='text-4xl sm:text-3xl'>{timeLeft.hours}</span> hours
								</p>
								<p className='whitespace-nowrap'>
									<span className='text-4xl sm:text-3xl'>{timeLeft.minutes}</span> mins
								</p>
								<p className='whitespace-nowrap'>
									<span className='text-4xl sm:text-3xl'>{timeLeft.seconds}</span> sec
								</p>
							</div>
						</div>

						<Link href='/register' passHref>
							<button className='bg-black text-white w-36 h-14 hover:bg-violet-700 active:bg-violet-800'>Register_</button>
						</Link>
					</div>

					{/* RIGHT SIDE */}
					<div className='bg-violet-600 image' style={{ backgroundImage: 'url(/home-image.png)' }}></div>
				</div>
			</div>
		</>
	)
}
