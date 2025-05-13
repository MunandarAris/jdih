import dynamic from 'next/dynamic';
const TableComponent = dynamic(() => import('@/components/organisms/Table'), {
	ssr: false,
});
const BaseModal = dynamic(() => import('@/components/molecules/BaseModal'), {
	ssr: false,
});

import { IoIosStarOutline } from 'react-icons/io';
import { RiDeleteBin7Fill } from 'react-icons/ri';

import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { Flex } from 'antd';
import SwitchComponent from '@/components/atoms/SwitchComponent';
import { useState } from 'react';
dayjs.locale('id');

function IKMPage() {
	const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
	const [content, setContent] = useState('');

	const columns = [
		{
			title: 'NO',
			dataIndex: 'no',
			sorter: false,
		},
		{
			title: 'NAMA PENGGUNA',
			dataIndex: 'nama_pengguna',
			sorter: false,
		},
		{
			title: 'DESKRIPSI REVIEW',
			dataIndex: 'review',
			sorter: false,
		},
		{
			title: 'TANGGAL DIBUAT',
			dataIndex: 'tanggal_dibuat',
			sorter: false,
		},
		{
			title: 'RATING',
			dataIndex: 'rating',
			sorter: false,
			render: (rating) => {
				return (
					<Flex align="center" gap={4}>
						<IoIosStarOutline />
						<span>{rating}</span>
					</Flex>
				);
			},
		},
		{
			title: 'TERBITKAN',
			dataIndex: 'terbitkan',
			sorter: false,
			render: (terbit) => {
				return (
					<SwitchComponent
						withLabelValue={false}
						value={terbit}
						onChange={(value) => {
							value
								? setContent(
										'Apakah Anda yakin ingin menampilkan pada halaman JDIH?'
								  )
								: setContent(
										'Apakah Anda yakin ingin menyembunyikan pada halaman JDIH?'
								  );
							setOpenModalConfirmation(true);
						}}
					/>
				);
			},
		},
		{
			title: 'AKSI',
			dataIndex: 'aksi',
			sorter: false,
			render: (_, item) => {
				return (
					<span
						style={{
							cursor: 'pointer',
						}}
						onClick={() => {
							setOpenModalConfirmation(true);
							setContent('Apakah Anda yakin ingin menghapus data ini?');
						}}
					>
						<RiDeleteBin7Fill size={16} />
					</span>
				);
			},
		},
	];

	const dummyData = [
		{
			no: '1',
			nama_pengguna: 'Aris Munandar',
			review: 'Sangat bermanfaat dalam mencari informasi hukum',
			tanggal_dibuat: ` ${dayjs().format('DD MMM YYYY')}`,
			rating: '3.0',
			terbitkan: false,
		},
		{
			no: '2',
			nama_pengguna: 'Willy Agustino',
			review: 'Informasi hukum yang ditampilkan sangat lengkap',
			tanggal_dibuat: ` ${dayjs().format('DD MMM YYYY')}`,
			rating: '5.0',
			terbitkan: true,
		},
	];

	const handlePaginationChange = (current, showPerPage) => {};

	const handleCloseModal = () => {
		setOpenModalConfirmation(false);
		setContent('');
	};

	const handleSubmitConfirmation = async () => {
		try {
			switch (true) {
				case 'Apakah Anda yakin ingin menampilkan pada halaman JDIH?':
					break;
				case 'Apakah Anda yakin ingin menyembunyikan pada halaman JDIH?':
					break;
				case 'Apakah Anda yakin ingin menghapus data ini?':
					break;
				default:
					break;
			}
		} catch (error) {}

		handleCloseModal();
	};

	return (
		<div>
			{/* Header */}
			<h1>Indeks Kepuasan Masyarakat</h1>

			{/* Table Section */}
			<TableComponent
				columns={columns}
				dataSource={dummyData}
				onChangePagination={handlePaginationChange}
			/>

			{/* Modal */}
			<BaseModal
				open={openModalConfirmation}
				title="Konfirmasi"
				maxWidth={320}
				cancelButtonAttribute={{
					label: 'Batal',
					onClick: handleCloseModal,
				}}
				submitButtonAttribute={{
					label: 'Ya',
					onClick: handleSubmitConfirmation,
				}}
			>
				<p>{content}</p>
			</BaseModal>
		</div>
	);
}

export default IKMPage;
