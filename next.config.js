/** @type {import('next').NextConfig} */
const { NODE_ENV } = process.env;
const { homepage } = require('./package.json');

const isProd = NODE_ENV === 'production';
const assetPrefix = isProd && homepage ? new URL(homepage).pathname : '';

const nextConfig = {
  output: 'export', // ✅ Next.js 15 정적 사이트 설정
  distDir: 'docs', // ✅ 빌드 결과를 'docs' 폴더에 저장
  assetPrefix, // ✅ GitHub Pages에서 정적 파일을 올바르게 로드하도록 설정
  basePath: assetPrefix || '', // ✅ GitHub Pages에서 페이지 경로를 자동으로 맞춤
  env: {
    NEXT_PUBLIC_BASE_PATH: assetPrefix, // ✅ 클라이언트에서도 접근 가능하도록 환경 변수 추가
  },
};

module.exports = nextConfig;
