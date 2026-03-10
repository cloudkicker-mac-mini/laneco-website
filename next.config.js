/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repositoryName = 'laneco-website';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProduction ? `/${repositoryName}` : '',
  assetPrefix: isProduction ? `/${repositoryName}/` : ''
};

module.exports = nextConfig;
