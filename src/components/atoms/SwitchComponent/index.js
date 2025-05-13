import { Flex, Form, Switch } from 'antd';

function SwitchComponent({
	name = '',
	error = '',
	label = '',
	required = false,
	onChange = () => {},
	value = false,
	withLabelValue = true,
	...props
}) {
	return (
		<Form layout="vertical" requiredMark={false} name={name}>
			<Form.Item
				label={
					<span style={{ fontWeight: '600' }}>
						{label}
						{required && <span style={{ color: 'red', marginLeft: 4 }}>*</span>}
					</span>
				}
				required={required}
			>
				<Flex vertical={true} gap={0}>
					<Flex gap={12} align="center">
						<Switch
							style={{
								width: 'min-content',
							}}
							onChange={onChange}
							value={value}
							size="small"
							{...props}
						/>

						{withLabelValue && (
							<span
								style={{
									fontSize: '14px',
									color: '#323842FF',
								}}
							>
								{value ? 'Aktif' : 'Tidak Aktif'}
							</span>
						)}
					</Flex>

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
				</Flex>
			</Form.Item>
		</Form>
	);
	s;
}

export default SwitchComponent;
