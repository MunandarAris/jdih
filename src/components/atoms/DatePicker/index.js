import { DatePicker, Form } from 'antd';

function DatePickerInput({
	label = '',
	name = '',
	required = false,
	minDate = null,
	maxDate = null,
	placeholder = '',
	value = null,
	onChange = () => {},
	error = '',
	...props
}) {
	return (
		<Form
			layout="vertical"
			style={{
				fontWeight: 'bold',
			}}
			name={name}
		>
			<Form.Item
				label={
					<span style={{ fontWeight: '600' }}>
						{label}
						{required && <span style={{ color: 'red', marginLeft: 4 }}>*</span>}
					</span>
				}
				validateStatus={error ? 'error' : ''}
			>
				<DatePicker
					allowClear
					minDate={minDate}
					maxDate={maxDate}
					placeholder={placeholder}
					style={{
						width: '100%',
						height: '36px',
					}}
					onChange={onChange}
					value={value}
					format="DD-MM-YYYY"
					{...props}
				/>
				{error && (
					<span
						style={{
							color: 'red',
							fontSize: '12px',
							marginTop: '4px',
							fontWeight: 'normal',
						}}
					>
						{error}
					</span>
				)}
			</Form.Item>
		</Form>
	);
}

export default DatePickerInput;
