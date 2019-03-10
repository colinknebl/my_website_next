import React from 'react';
import { NextContext } from 'next';

class Home extends React.Component {
	static async getInitialProps(ctx: NextContext /*{ err, req, }*/) {
		// const {
		// 	err,
		// 	pathname,
		// 	query,
		// 	asPath,
		// 	req,
		// 	res,
		// 	jsonPageRes,
		// }: NextContext = ctx;

		// const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
		// console.log('userAgent:', userAgent);
		return {};
	}

	render() {
		return (
			<main
				style={{
					height: '100vh',
					background: 'url(/static/matrix.gif)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				{/* <img src="https://i.imgur.com/E5gN1eK.gif" alt="matrix gif" /> */}
				<h1
					style={{
						color: 'white',
						margin: '0',
						textAlign: 'center'
					}}
				>
					Welcome to Colin's domain!
					<br />
					It is currently under construnction
				</h1>
			</main>
		);
	}
}

export default Home;
