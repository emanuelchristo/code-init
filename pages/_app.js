import 'lib/firebase'

import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Head from 'next/head'

import 'styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<meta name='msapplication-TileColor' content='#212121' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp
