import pkg from '../../package.json'
import {createServerFn} from "@tanstack/react-start";
import {useQuery} from "@tanstack/react-query";

const getVersion = createServerFn().handler(() => pkg.version)

export function Footer() {
	const { data: version } = useQuery({
		queryKey: ['app-version'],
		queryFn: () => getVersion(),
	})

	return (
		<footer className="text-muted-foreground flex justify-between p-2 border-t border-gray-600 max-w-7xl mx-auto">
			<div className="flex items-center gap-2 text-sm">
				<img
					className="aspect-square w-6"
					src="/icon/favicon-32x32.png"
					alt="site logo"
				/>
				Sebastian Drabik &copy;2026
			</div>
			<div>sdrabik.dev@{version}</div>
		</footer>
	);
}
