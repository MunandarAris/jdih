/** @type {import('next').NextConfig} */
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const nextConfig = {
	reactStrictMode: true,
	transpilePackages: [
		'antd',
		'@ant-design',
		'rc-util',
		'rc-pagination',
		'rc-picker',
		'rc-notification',
		'rc-tooltip',
		'rc-tree',
		'rc-table',
		'rc-input',
	],
	webpack(config) {
		config.plugins.push(new CaseSensitivePathsPlugin());
		return config;
	},
};

export default nextConfig;
