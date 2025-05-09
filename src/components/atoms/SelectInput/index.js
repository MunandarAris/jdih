import { Form, Select } from 'antd';

function SelectInput({
	label = '',
	value = null,
	options = [],
	required = false,
	onSelect = () => {},
	placeholder = '',
}) {
	return (
		<Form layout="vertical" requiredMark={false}>
			<Form.Item
				label={
					<span style={{ fontWeight: 'bold' }}>
						{label}
						{required && <span style={{ color: 'red', marginLeft: 4 }}>*</span>}
					</span>
				}
				style={{ fontWeight: 'bold' }}
				required={required}
			>
				<Select
					value={value}
					placeholder={placeholder}
					options={options}
					onSelect={onSelect}
					style={{
						height: '36px',
					}}
				/>
			</Form.Item>
		</Form>
	);
}

export default SelectInput;
