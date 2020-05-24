import Link from 'next/link'
export default () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link href="/">
				<a className="navbar-brand mx-auto">Date&Time</a>
			</Link>
		</nav>
	)
}
