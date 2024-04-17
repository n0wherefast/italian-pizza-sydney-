/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "picsum.photos",
            port: '',
            pathname: '/id/**',
          },
          {
            protocol: 'https',
            hostname: "cdn.sanity.io",
            port: '',
            // pathname: '/id/**',
          },
        ],
      },
    
};

export default nextConfig;



 
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }
