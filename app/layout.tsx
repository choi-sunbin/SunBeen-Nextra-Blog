import "./globals.css";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Image from "next/image";

export const metadata = {
	// Define your metadata here
	// For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = <Banner storageKey="some-key">Sunbeen's Blog</Banner>;
const navbar = (
	<Navbar
		logo={
			<>
				<Image
					width={36}
					height={36}
					src={"https://img.icons8.com/?size=100&id=tvOT5hDemP8M&format=png&color=000000"}
					className="mr-2"
					alt="Logo"
				/>
				<b className="text-white">Sunbeen's Blog</b>
			</>
		}
		// ... Your additional navbar options
	/>
);
const footer = (
	<Footer>
		<div className="text-sm text-gray-500 space-y-1">
			<p>MIT {new Date().getFullYear()} © Nextra.</p>
			<p>
				Inspired by{" "}
				<a
					href="https://nimsitha.com"
					target="_blank"
					rel="noopener noreferrer"
					className="underline hover:text-white transition-colors"
				>
					nimsitha.com
				</a>
			</p>
		</div>
	</Footer>
);

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			// Not required, but good for SEO
			lang="en"
			// Required to be set
			dir="ltr"
			// Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
			suppressHydrationWarning
		>
			<Head
			// ... Your additional head options
			>
				{/* Your additional tags should be passed as `children` of `<Head>` element */}
			</Head>
			<body>
				<div className="bg-grey-d">
					<Layout
						banner={banner}
						navbar={navbar}
						pageMap={await getPageMap()}
						docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
						footer={footer}
						// ... Your additional layout options
					>
						{children}
					</Layout>
				</div>
			</body>
		</html>
	);
}
