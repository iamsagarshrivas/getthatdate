import Datepicker from 'react-datepicker'
export default ({onChange, selected, className,	dateFormat,	...restProps}) => {
	return (
		<Datepicker
			onChange={onChange}
			selected={selected}
			className={className}
			dateFormat={dateFormat}
			open
			{...restProps}
		/>
	)
}