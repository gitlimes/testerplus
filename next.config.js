/** @type {import('next').NextConfig} */
import { getLocaleList } from './utils/locale.js';

const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en-US'], //getLocaleList(),
		defaultLocale: 'en-US',
	}
};

export default nextConfig;
