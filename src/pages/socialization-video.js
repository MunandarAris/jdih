import TableComponent from '@/components/organisms/Table';
import { colorsTheme } from '@/constants/colors';
import { Button, Flex } from 'antd';
import { MdOutlineAdd } from 'react-icons/md';

import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import BaseModal from '@/components/molecules/BaseModal';
import InputText from '@/components/atoms/InputText';
import TextAreaComponent from '@/components/atoms/TextAreaComponent';
import { useMemo, useState } from 'react';

function SocializationVideoPage() {
	const [form, setForm] = useState({
		judul_video: '',
		deskripsi: '',
		link_embed_video: '',
	});
	const { judul_video, deskripsi, link_embed_video } = form;
	const [openModalCreate, setOpenModalCreate] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [openModalConfirmation, setOpenModalConfirmation] = useState(false);

	const columns = [
		{
			title: 'NO',
			dataIndex: 'no',
			sorter: false,
		},
		{
			title: 'JUDUL',
			dataIndex: 'judul_video',
			sorter: false,
		},
		{
			title: 'TANGGAL DIBUAT',
			dataIndex: 'tanggal_dibuat',
			sorter: false,
		},
		{
			title: 'TANGGAL DIUBAH',
			dataIndex: 'tanggal_diubah',
			sorter: false,
		},
		{
			title: 'AKSI',
			dataIndex: 'aksi',
			sorter: false,
			render: (_, item) => {
				return (
					<Flex gap={8} align="center">
						<span
							style={{
								cursor: 'pointer',
							}}
							onClick={() => {
								setOpenModalCreate(true);
								setForm({
									deskripsi: item?.deskripsi,
									judul_video: item?.judul_video,
									link_embed_video: item?.link_embed_video,
								});
								setIsEdit(true);
							}}
						>
							<FaEdit size={16} />
						</span>

						<span
							style={{
								cursor: 'pointer',
							}}
							onClick={() => setOpenModalConfirmation(true)}
						>
							<MdDelete size={18} />
						</span>
					</Flex>
				);
			},
		},
	];

	const dummyData = [
		{
			no: '1',
			judul_video: 'Aris Munandar',
			tanggal_dibuat: ` ${dayjs().format('DD MMM YYYY')}`,
			tanggal_diubah: ` ${dayjs().format('DD MMM YYYY')}`,
			deskripsi: 'Testing',
			link_embed_video: 'https://www.youtube.com/',
		},
		{
			no: '2',
			judul_video: 'Willy Agustino',
			tanggal_dibuat: ` ${dayjs().format('DD MMM YYYY')}`,
			tanggal_diubah: ` ${dayjs().format('DD MMM YYYY')}`,
			deskripsi: 'Testing',
			link_embed_video: 'https://www.youtube.com/',
		},
	];

	const handlePaginationChange = (current, showPerPage) => {};

	const handleChangeForm = (e, key) => {
		const value = e.target.value;
		setForm((prev) => ({ ...prev, [key]: value }));
	};

	const disabledSubmitButton = useMemo(() => {
		return !judul_video || !deskripsi || !link_embed_video;
	}, [judul_video, deskripsi, link_embed_video]);

	const handleCloseModal = () => {
		setOpenModalCreate(false);
		setForm({
			deskripsi: '',
			judul_video: '',
			link_embed_video: '',
		});
		setIsEdit(false);
	};

	const handleSubmitData = async () => {
		try {
			if (isEdit) {
			} else {
			}
		} catch (error) {}

		handleCloseModal();
	};

	const handleDeleteData = async () => {
		try {
		} catch (error) {}

		setOpenModalConfirmation(false);
	};

	return (
		<div>
			{/* Header */}
			<Flex align="center" justify="space-between">
				<h1>Video Sosialisasi</h1>

				<Button
					style={{
						backgroundColor: colorsTheme.secondary,
						color: 'white',
						border: 'none',
					}}
					icon={<MdOutlineAdd size={20} />}
					onClick={() => setOpenModalCreate(true)}
				>
					Video
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
				open={openModalCreate}
				title={isEdit ? 'Edit Video' : 'Tambah Video'}
				onClose={handleCloseModal}
				cancelButtonAttribute={{
					label: 'Batal',
					onClick: handleCloseModal,
				}}
				submitButtonAttribute={{
					label: 'Simpan',
					onClick: handleSubmitData,
					disabled: disabledSubmitButton,
				}}
			>
				<Flex
					vertical
					style={{
						marginTop: '18px',
					}}
				>
					<InputText
						label="Judul Video"
						placeholder="Masukkan judul video"
						required
						value={judul_video}
						onChange={(e) => handleChangeForm(e, 'judul_video')}
						name="judul_video"
					/>
					<TextAreaComponent
						label="Deskripsi"
						placeholder="Masukkan deskripsi video"
						required
						value={deskripsi}
						onChange={(e) => handleChangeForm(e, 'deskripsi')}
						name="deskripsi"
					/>
					<TextAreaComponent
						label="Link Embed Video"
						placeholder="Masukkan link embed video"
						required
						value={link_embed_video}
						onChange={(e) => handleChangeForm(e, 'link_embed_video')}
						name="link_embed_video"
					/>
				</Flex>
			</BaseModal>

			<BaseModal
				open={openModalConfirmation}
				title="Konfirmasi"
				maxWidth={320}
				cancelButtonAttribute={{
					label: 'Batal',
					onClick: () => setOpenModalConfirmation(false),
				}}
				submitButtonAttribute={{
					label: 'Ya',
					onClick: handleDeleteData,
				}}
				onClose={() => setOpenModalConfirmation(false)}
			>
				<p>Apakah Anda yakin ingin menghapus data ini?</p>
			</BaseModal>
		</div>
	);
}

export default SocializationVideoPage;
