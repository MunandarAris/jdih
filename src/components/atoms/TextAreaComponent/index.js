import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function TextAreaComponent({
	placeholder = '',
	required = false,
	error = '',
	label = '',
	rows = 5,
	maxLength = 10,
	name = '',
	onChange = () => {},
	value = '',
	...props
}) {
	return (
		<Form.Item
			label={
				label && (
					<div style={{ fontWeight: 600, color: '#1F1F1F' }}>
						{label}
						{required && <span className="required-asterisk">*</span>}
					</div>
				)
			}
			layout="vertical"
			name={name}
			validateStatus={error ? 'error' : ''}
		>
			<TextArea
				placeholder={placeholder}
				rows={rows}
				maxLength={maxLength}
				onChange={onChange}
				value={value}
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
	);
}

export default TextAreaComponent;
