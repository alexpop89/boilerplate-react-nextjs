/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['next-international', 'international-types'],
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
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
