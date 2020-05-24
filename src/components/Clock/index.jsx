import classes from './Clock.module.css'
import classnames from 'classnames'
export default () => {

	return (
		<div className={classes.ring}>
			<div className="dial">
				{/* <div className={classnames(classes.hour, 'hour')}>h</div>
				<div className={classnames(classes.minute, 'minute')}>m</div>
				<div className={classnames(classes.second, 'second')}>s</div> */}
			</div>
		</div>
	)
}