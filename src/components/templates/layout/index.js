import React from 'react';
import { Layout } from 'antd';
import styles from './Layout.module.css';
import Sidebar from '@/components/molecules/Sidebar';
import Navbar from '@/components/molecules/Navbar';

const { Content } = Layout;

const LayoutComponent = ({ children }) => {
	return (
		<Layout
			style={{
				minHeight: '100vh',
			}}
		>
			<Sidebar />

			<Layout>
				<Navbar />
				<Content className={styles.wrapper}>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default LayoutComponent;
