import { Form, Select } from 'antd';

function SelectInput({
	label = '',
	value = null,
	options = [],
	required = false,
	onSelect = () => {},
	placeholder = '',
	name = '',
	error = '',
	...props
}) {
	return (
		<Form layout="vertical" requiredMark={false} name={name}>
			<Form.Item
				validateStatus={error ? 'error' : ''}
				label={
					<span style={{ fontWeight: '600' }}>
						{label}
						{required && <span style={{ color: 'red', marginLeft: 4 }}>*</span>}
					</span>
				}
				style={{ fontWeight: 'bold' }}
				required={required}
			>
				<Select
					{...props}
					value={value}
					placeholder={placeholder}
					options={options}
					onSelect={onSelect}
					style={{
						height: '36px',
					}}
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

export default SelectInput;
