/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/index',
            },
        ]
    },
}

module.exports = nextConfig
