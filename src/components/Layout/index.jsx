import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import Ad from '../Ad'

export default ({ children }) => {

	return (
		<>
			<Head>
				<title>Calculate Date and time easily</title>
			</Head>
			<header className="sticky-top shadow border-0">
				<Header />
			</header>
			<main style={{ minHeight: '100vh' }} className="container-fluid">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-sm-12">
						<Ad />
					</div>

					<div className="col-lg-8 col-md-8 col-sm-18">
						{children}
					</div>

					<div className="col-lg-2 col-md-2 col-sm-12">
						<Ad />
					</div>
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}