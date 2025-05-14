import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { ConfigProvider } from 'antd';
import LayoutComponent from '@/components/templates/Layout';
import { useEffect, useState } from 'react';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export default function App({ Component, pageProps }) {
	const [isErrorComponent, setIsErrorComponent] = useState(true);
	const excludedComponents = ['Error', 'LoginPage', 'ErrorPage', 'login'];

	useEffect(() => {
		if (
			excludedComponents.includes(Component?.name || Component?.displayName)
		) {
			setIsErrorComponent(true);
		} else {
			setIsErrorComponent(false);
		}
	}, [Component]);

	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: 'Inter, sans-serif',
				},
			}}
		>
			<div className={inter.className}>
				{isErrorComponent ? (
					<Component {...pageProps} />
				) : (
					<LayoutComponent>
						<Component {...pageProps} />
					</LayoutComponent>
				)}
			</div>
		</ConfigProvider>
	);
}
