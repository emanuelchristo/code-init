import Link from 'next/link'
import { IoMdClose } from 'react-icons/io'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'

const links = [
	{
		name: 'home_',
		path: '/',
	},
	{
		name: 'register_',
		path: '/register',
	},
	{
		name: 'contact_',
		path: '/contact',
	},
]

export default function Menu({ show, onClose }) {
	return (
		<div className={`w-screen h-screen bg-white fixed top-0 left-0 ${show ? 'visible' : 'invisible'}`}>
			<div className='h-20 px-6 flex items-center justify-between border-b border-gray-200 '>
				<Link href='/' passHref>
					<img onClick={onClose} src='/logo.svg' className='h-9 cursor-pointer'></img>
				</Link>
				<IoMdClose onClick={onClose} className='text-3xl hover:text-violet-600 active:text-black' />
			</div>

			<ul className='px-6 py-12 flex flex-col gap-6'>
				{links.map((link, index) => (
					<li key={index} className=' border-b pb-4'>
						<Link href={link.path}>
							<a className='font-medium hover:text-violet-600 active:text-black' onClick={onClose}>
								{link.name}
							</a>
						</Link>
					</li>
				))}
				<div className='flex gap-4 pt-6'>
					<li>
						<a
							className='text-2xl hover:text-violet-600 active:text-black cursor-pointer'
							href='http://facebook.com'
							target='_blank'
							rel='noreferrer noopener'
						>
							<FaFacebookSquare />
						</a>
					</li>
					<li>
						<a
							className='text-2xl hover:text-violet-600 active:text-black cursor-pointer'
							href='http://instagram.com'
							target='_blank'
							rel='noreferrer noopener'
						>
							<FaInstagram className='text-2xl' />
						</a>
					</li>
				</div>
			</ul>
		</div>
	)
}
