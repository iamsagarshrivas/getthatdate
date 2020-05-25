import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default ({ children }) => {

	return (
		<>
			<Head>
				<title>Calculate Date and time easily</title>
			</Head>
			<header className="sticky-top shadow border-0">
				<Header />
			</header>
			<main style={{minHeight: '100vh'}} className="container">
				{children}
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}