import Document, { Html, Head, NextScript, Main } from 'next/document'
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="title" content="Calculate Date and Time easily." />
					<meta name="description" content="Calculate Date and Time easily." />
					<meta name="keywords" content="Date, time, date and time, date calculator, time calculator." />
					<meta name="robots" content="index, follow" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="language" content="English" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />

					<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

					<link rel="shortcut icon" href='/favicon.ico' type="image/x-icon" />
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
					<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" />
					<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" />
					<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" />
				</body>
			</Html>
		)
	}
}