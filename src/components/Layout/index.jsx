import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import Ad from '../Ad'
import classes from './Layout.module.css'
import classNames from 'classnames'

export default ({ children }) => {

	return (
		<>
			<Head>
				<title>Calculate Date and time easily</title>
			</Head>
			<header className="sticky-top shadow border-0">
				<Header />
			</header>
			<main style={{ minHeight: '100vh' }} className={classNames("container-fluid", classes.main)}>
				<div className="row">
					<div className={classNames("col-lg-2 col-md-2 col-sm-12", classes.ad, classes.ad1)}>
						<Ad />
					</div>

					<div className={classNames("col-lg-8 col-md-8 col-sm-18", classes.content)}>
						{children}
					</div>

					<div className={classNames("col-lg-2 col-md-2 col-sm-12", classes.ad, classes.ad2)}>
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