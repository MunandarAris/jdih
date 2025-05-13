import dynamic from 'next/dynamic';
const TableComponent = dynamic(() => import('@/components/organisms/Table'), {
	ssr: false,
});
const BaseModal = dynamic(() => import('@/components/molecules/BaseModal'), {
	ssr: false,
});
const InputText = dynamic(() => import('@/components/atoms/InputText'), {
	ssr: false,
});

import { colorsTheme } from '@/constants/colors';
import { Button, Flex } from 'antd';
import { MdOutlineAdd } from 'react-icons/md';
import { BiSolidEditAlt } from 'react-icons/bi';

import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { useMemo, useState } from 'react';
import SwitchComponent from '@/components/atoms/SwitchComponent';

dayjs.locale('id');

function UserManagementPage() {
	const [editUser, setEditUser] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [form, setForm] = useState({
		nama_pengguna: '',
		email: '',
		status: false,
	});
	const [loading, setLoading] = useState(false);

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
			title: 'EMAIL',
			dataIndex: 'email',
			sorter: false,
		},
		{
			title: 'TANGGAL DIBUAT',
			dataIndex: 'tanggal_dibuat',
			sorter: false,
		},
		{
			title: 'STATUS',
			dataIndex: 'status',
			sorter: false,
			render: (value) => {
				return (
					<span
						style={{
							background: value == 'Tidak Aktif' ? '#FDF2F2' : '#EEFDF3FF',
							padding: '6px 14px 6px 14px',
							borderRadius: '100px',
							color: value == 'Tidak Aktif' ? '#DE3B40' : '#107B35',
						}}
					>
						{value}
					</span>
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
							setOpenModal(true);
							setEditUser(true);
							setForm({
								email: item?.email,
								nama_pengguna: item?.nama_pengguna,
								status: item?.status == 'Aktif' ? true : false,
							});
						}}
					>
						<BiSolidEditAlt size={24} />
					</span>
				);
			},
		},
	];

	const dummyData = [
		{
			no: '1',
			nama_pengguna: 'Aris Munandar',
			email: 'aris@gmail.com',
			tanggal_dibuat: ` ${dayjs().format('DD MMM YYYY')}`,
			status: 'Aktif',
		},
		{
			no: '2',
			nama_pengguna: 'Willy Agustino',
			email: 'willy@gmail.com',
			tanggal_dibuat: ` ${dayjs().format('DD MMM YYYY')}`,
			status: 'Tidak Aktif',
		},
	];

	const handlePaginationChange = (current, showPerPage) => {};

	const disabledSubmitButton = useMemo(() => {
		return !form.nama_pengguna || !form.email;
	}, [form.email, form.nama_pengguna]);

	const handleCloseModal = () => {
		setEditUser(false);
		setOpenModal(false);
		setForm({
			nama_pengguna: '',
			email: '',
		});
	};

	const handleCreateNewUser = async () => {
		setLoading(true);
		setEditUser(false);
		setOpenModal(false);

		try {
		} catch (error) {}

		setForm({
			nama_pengguna: '',
			email: '',
		});
		setLoading(false);
	};

	const handleEditUser = async () => {
		setLoading(true);
		setEditUser(false);
		setOpenModal(false);

		try {
		} catch (error) {}

		setForm({
			nama_pengguna: '',
			email: '',
			status: false,
		});
		setLoading(false);
	};

	return (
		<div>
			{/* Header */}
			<Flex align="center" justify="space-between">
				<h1>User Management</h1>

				<Button
					style={{
						backgroundColor: colorsTheme.secondary,
						color: 'white',
						border: 'none',
					}}
					icon={<MdOutlineAdd size={20} />}
					onClick={() => {
						setEditUser(false);
						setOpenModal(true);
					}}
				>
					User Management
				</Button>
			</Flex>

			{/* Table Section */}
			<TableComponent
				columns={columns}
				dataSource={dummyData}
				onChangePagination={handlePaginationChange}
			/>

			{/* Modal */}
			<BaseModal
				open={openModal}
				title={editUser ? 'Edit User Management' : 'Tambah User Management'}
				cancelButtonAttribute={{
					label: 'Batal',
					onClick: handleCloseModal,
				}}
				submitButtonAttribute={{
					label: 'Simpan',
					onClick: editUser ? handleEditUser : handleCreateNewUser,
					disabled: disabledSubmitButton,
					loading: loading,
				}}
				onClose={handleCloseModal}
			>
				<Flex
					vertical={true}
					style={{
						marginTop: '18px',
					}}
					gap={0}
				>
					<InputText
						label="Nama Pengguna"
						required
						placeholder="Masukkan nama pengguna"
						onChange={(e) =>
							setForm((prev) => ({ ...prev, nama_pengguna: e.target.value }))
						}
						value={form.nama_pengguna}
					/>

					<InputText
						label="Email"
						required
						placeholder="Masukkan alamat email"
						onChange={(e) =>
							setForm((prev) => ({ ...prev, email: e.target.value }))
						}
						value={form.email}
					/>

					<SwitchComponent
						label="Status"
						required
						value={form.status}
						onChange={() =>
							setForm((prev) => ({ ...prev, status: !prev.status }))
						}
					/>
				</Flex>
			</BaseModal>
		</div>
	);
}

export default UserManagementPage;
