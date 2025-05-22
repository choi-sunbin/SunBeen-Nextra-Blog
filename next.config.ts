// 기존
// import type { NextConfig } from "next";
// const nextConfig: NextConfig = {
//	  /* config options here */
//} ;
//
//export default nextConfig;

import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
	staticImage: true
	// ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
	images: {
		domains: ["img.icons8.com"] // 허용할 외부 이미지 도메인 추가
	},
	darkMode: true, // 다크 모드 활성화
	defaultTheme: "dark" // 기본 테마를 다크로 설정
	// ... Add regular Next.js options here
});
