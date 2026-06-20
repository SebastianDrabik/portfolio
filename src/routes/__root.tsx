import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";
import { Header } from "#/components/Header.tsx";
import { Footer } from "#/components/Footer.tsx";
import { richMedia } from "#/lib/media-util.ts";

import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const qc = new QueryClient();

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Sebastian Drabik • Software Engineer",
			},
			...richMedia,
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				href: "/icon/favicon.ico",
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="bg-background text-gray-900 font-jetbrains-mono font-bold dark snap-y snap-mandatory">
				<QueryClientProvider client={qc}>
					<Header />
					{children}
					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
						]}
					/>
					<Footer />
				</QueryClientProvider>
				<Scripts />
			</body>
		</html>
	);
}
