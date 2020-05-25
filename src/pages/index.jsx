import { Collapse } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import moment from 'moment';

const Clock = dynamic(()=> import('../components/Clock'), {
	ssr: false
})

export default () => {

	const [dateNtime, setDateNtime] = useState(moment());
	const { push } = useRouter();

	useEffect(() => {
		const timerId = setInterval(() => {
			setDateNtime(moment())
		}, 1000);
		return () => {
			clearInterval(timerId);
		}
	}, [])

	return (
		<>
			<div className="row my-5 d-flex justify-content-center">
				<Clock momentObj={dateNtime}/>
		</div>
			<div className="row my-5">
				<div className="col-lg-4 col-md-4 col-sm-12 my-1">
					<button onClick={e => push('/date-calculation')} className="border-0 btn btn-lg btn-light shadow-lg w-100">
						<span>
							<i className="fa fa-calendar-check-o mx-2" />
		{process.env.AD_CLIENT}
						Date Calculation
						</span>
					</button>
				</div>


				<div className="col-lg-4 col-md-4 col-sm-12 my-1">
					<button onClick={e => push('/time-calculation')} className="border-0 btn btn-lg btn-light shadow-lg w-100">
						<span>
							<i className="fa fa-clock-o mx-2" />
						Time Calculation
						</span>
					</button>
				</div>


				<div className="col-lg-4 col-md-4 col-sm-12 my-1">
					<button onClick={e => push('/date-time-calculation')} className="border-0 btn btn-lg btn-light shadow-lg w-100">
						<span>
							<i className="fa fa-calculator mx-2" />
						Date & Time Calculation
						</span>
					</button>
				</div>
			</div>
			<div className="d-flex jumbotron justify-content-center my-5 row">
				<span className="d-flex justify-content-center col-sm-12 col-md-4 col-lg-4" style={{fontSize:"3rem"}}>
					{dateNtime.format('MMMM Do YYYY')}
				</span>
				<span className="d-flex justify-content-center col-sm-12 col-md-4 col-lg-4" style={{fontSize:"3rem"}}>
					{dateNtime.format('HH:mm:ss')}
				</span>
				<span className="d-flex justify-content-center col-sm-12 col-md-4 col-lg-4" style={{fontSize:"3rem"}}>
					{dateNtime.format('dddd')}
				</span>

				{/* <div className="col-sm-12 col-md-4 col-lg-4">
					<div className="card shadow-sm border-0">
						{dateNtime.format('MMMM Do YYYY')}
					</div>
				</div>
				<div className="col-sm-12 col-md-4 col-lg-4">
					b
				</div>
				<div className="col-sm-12 col-md-4 col-lg-4">
					c
				</div> */}
			</div>
		</>
	)
}