import classes from './Clock.module.css'
import classnames from 'classnames'
export default ({momentObj}) => {



	const hourAngle = (momentObj.hour()*360/12 + ((momentObj.minute() * 360/60)/12))%360;
	const minAngle=((momentObj.minute() * 360/60) + (momentObj.second()* 360/60)/60)%360;
	const secAngle=( momentObj.second() * 360/60)%360;

	return (
		<div className={classes.ring}>
			<svg id="clock" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 600 600">
				<g id="face">
					<path className={classes["hour-marks"]} d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6" />
					<circle className={classes["mid-circle"]} cx="300" cy="300" r="16.2" />
				</g>
				<g id={classes["hour"]}>
					<path style={{transform: `rotate(${hourAngle}deg)`}} className={classes["hour-arm"]} d="M300.5 298V142" />
					<circle className={classes["sizing-box"]} cx="300" cy="300" r="253.9" />
				</g>
				<g id={classes["minute"]}>
					<path style={{transform: `rotate(${minAngle}deg)`}} className={classes["minute-arm"]} d="M300.5 298V67" />
					<circle className={classes["sizing-box"]} cx="300" cy="300" r="253.9" />
				</g>
				<g id={classes["second"]}>
					<path style={{transform: `rotate(${secAngle}deg)`}} className={classes["second-arm"]} d="M300.5 350V55" />
					<circle className={classes["sizing-box"]} cx="300" cy="300" r="253.9" />
				</g>
			</svg>
		</div>
	)
}