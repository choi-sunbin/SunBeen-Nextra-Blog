import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
	// ... Add Nextra-specific options here
	staticImage: true
});

// Export the final Next.js config with Nextra included
export default withNextra({
	// ... Add regular Next.js options here

	images: {
		domains: ["img.icons8.com"] // 허용할 외부 이미지 도메인 추가
	}
});
