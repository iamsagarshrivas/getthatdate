import Datepicker from '../../components/Views/shared/Datepicker'
import moment from 'moment'
import { useState } from 'react'
export default () => {
	const [startDate, setStartDate] = useState(moment().toDate())

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-5 col-sm-12">
						<Datepicker
							selected={new Date()}
							onChange={date => setStartDate(date)}
							dateFormat="MMMM d, yyyy"
							open

						/>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-12"></div>
				</div>
			</div>
		</>
	)
}