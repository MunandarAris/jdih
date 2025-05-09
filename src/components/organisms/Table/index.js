import React, { useState } from 'react';
import { Pagination, Table } from 'antd';
import TableStyle from './Table.module.css';

// EXAMPLE columns format
// {
// 		title: 'NO',
// 		dataIndex: 'no',
// 		sorter: false,
// 	},
// {
// 		title: 'Aksi',
// 		dataIndex: '',
// 		key: 'action',
// 		render: () => {},
// },

function TableComponent({
	dataSource = [],
	columns = [],
	onChangePagination = () => {},
}) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const handleChangePagination = (current, pageSize) => {
		onChangePagination(current, pageSize);
		setCurrentPage(current);
		setPageSize(pageSize);
	};

	return (
		<div>
			<Table
				rowKey={(record) => record.id}
				loading={false}
				rowClassName={(_, index) => (index % 2 == 1 ? 'even' : '')}
				style={{
					boxShadow:
						'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				}}
				pagination={false}
				dataSource={dataSource}
				columns={columns}
			/>

			<div className={TableStyle.wrapperButtonAction}>
				<Pagination
					showSizeChanger
					defaultCurrent={currentPage}
					total={dataSource?.length - 1}
					align="end"
					current={currentPage}
					defaultPageSize={pageSize}
					pageSizeOptions={[10, 50, 100]}
					onChange={handleChangePagination}
					onShowSizeChange={handleChangePagination}
					pageSize={pageSize}
				/>
			</div>
		</div>
	);
}

export default TableComponent;
