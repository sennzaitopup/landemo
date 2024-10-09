/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'sennzai.dev',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.discordapp.com',
          pathname: '/badge-icons/**',
        }
      ],
    },
  }
   
module.exports = nextConfig;