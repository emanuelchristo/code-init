import Link from 'next/link'
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

export default function Navbar() {
	return (
		<nav className='fixed w-screen  bg-white flex items-center justify-between px-12 h-20 border-b border-gray-200'>
			<img src='/logo.svg'></img>
			<ul className='flex items-center gap-x-4'>
				{links.map((link, index) => (
					<li key={index}>
						<Link href={link.path}>
							<a className='py-4 px-2 font-medium hover:text-violet-600 active:text-black'>{link.name}</a>
						</Link>
					</li>
				))}
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
			</ul>
		</nav>
	)
}
