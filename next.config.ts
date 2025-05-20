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
	// ... Add regular Next.js options here
});
