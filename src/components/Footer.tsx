export function Footer() {
	return (
		<footer className="text-muted-foreground flex justify-between p-2 border-t border-gray-600">
			<div className="flex items-center gap-2">
				<img
					className="aspect-square w-6"
					src="/icon/favicon-32x32.png"
					alt="site logo"
				/>
				Sebastian Drabik &copy;2026
			</div>
			<div>sebastiandrabik.dev</div>
		</footer>
	);
}
