/** @type {import('next').NextConfig} */
const { NODE_ENV } = process.env;
const { homepage } = require('./package.json');

const assetPrefix = (() => {
  if (NODE_ENV === 'production' && homepage) {
    try {
      console.log('> Detected homepage URL in package.json');
      const { pathname } = new URL(homepage);
      if (pathname !== '/') {
        console.log(`> Apply '${pathname}' to assetPrefix(subPath)`);
        return pathname; // 🔥 '/resume' 적용
      }
      return '';
    } catch {
      console.log('> Cannot parse homepage URL, not applying assetPrefix(subPath)');
      return '';
    }
  }
  return '';
})();

const nextConfig = {
  output: 'export', // ✅ Next.js 15 정적 사이트 설정
  distDir: 'docs', // ✅ 빌드 결과를 'docs' 폴더에 저장
  assetPrefix, // ✅ GitHub Pages에서 정적 파일을 올바르게 로드하도록 설정
  basePath: assetPrefix || '', // ✅ GitHub Pages에서 페이지 경로를 자동으로 맞춤
};

module.exports = nextConfig;
