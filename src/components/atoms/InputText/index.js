import React from 'react';
import { Input, Form } from 'antd';

const InputText = ({
	label = '',
	name = '',
	required = false,
	placeholder = '',
	onChange = () => {},
	value = '',
	error = '',
	...props
}) => {
	return (
		<>
			<Form.Item
				layout="vertical"
				name={name}
				validateStatus={error ? 'error' : ''}
				label={
					label && (
						<div style={{ fontWeight: 600, color: '#1F1F1F' }}>
							{label}
							{required && <span className="required-asterisk">*</span>}
						</div>
					)
				}
			>
				<Input
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					style={{ height: '36px' }}
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
		</>
	);
};

export default InputText;
