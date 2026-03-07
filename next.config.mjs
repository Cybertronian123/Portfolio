/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPOSITORY_NAME || 'Portfolio';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : ''
};

export default nextConfig;
