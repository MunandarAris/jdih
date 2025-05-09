import { MdOutlineDashboard, MdReviews } from 'react-icons/md';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CiYoutube } from 'react-icons/ci';
import { FaUsers } from 'react-icons/fa6';

const getItem = (label, key, icon, children) => ({
	key,
	icon,
	children,
	label,
});

export const wrapperSidebar = [
	getItem('Dashboard', '/', <MdOutlineDashboard size={24} />),
	getItem('Dokumen', '/document-uu', <IoDocumentTextOutline size={24} />),
	getItem('Video Sosialisasi', '/socialization-video', <CiYoutube size={24} />),
	getItem('IKM', '/ikm', <MdReviews size={24} />),
	getItem('User Management', '/user-management', <FaUsers size={24} />),
];
