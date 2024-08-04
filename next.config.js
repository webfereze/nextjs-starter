const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
    },
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        unoptimized:true,
        domains: ['i.ibb.co'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = {...nextConfig, i18n}
