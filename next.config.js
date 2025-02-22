/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

const nextConfig = {
  assetPrefix: (() => {
    if (NODE_ENV === 'production' && homepage) {
      try {
        console.log('> Detected homepage url in package.json');
        const { pathname } = new URL(homepage);
        if (pathname !== '/') {
          console.log(`> Apply '${pathname}' to assetPrefix(subPath)`);
          return pathname;
        }
        return '';
      } catch {
        console.log('> Can not parse homepage URL not apply assetPrefix(subPath)');
        return '';
      }
    }
    return '';
  })(),
  eslint: {
    // 빌드 시 ESLint 오류 무시
    ignoreDuringBuilds: true,
  },
};

module.exports = withImages(nextConfig);
