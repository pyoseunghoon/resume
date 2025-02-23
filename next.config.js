/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Next.js 15 정적 사이트 설정
  distDir: 'docs', // ✅ 빌드 결과를 'docs' 폴더에 저장
  assetPrefix: '/resume', // ✅ GitHub Pages에서 무조건 '/resume' 붙이기
  basePath: '/resume', // ✅ GitHub Pages의 기본 경로 강제 설정
  env: {
    NEXT_PUBLIC_BASE_PATH: '/resume', // ✅ 클라이언트에서도 동일한 경로 사용 가능하도록 설정
  },
  images: {
    unoptimized: true, // ✅ GitHub Pages에서 Next.js 이미지 최적화 기능 비활성화
  },
};

module.exports = nextConfig;
