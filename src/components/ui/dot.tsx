import { cn } from "#/lib/utils.ts";

export function Dot({
	className,
	color,
	...props
}: React.HTMLProps<HTMLDivElement> & { color: React.CSSProperties["color"] }) {
	return (
		<div
			className={cn(`rounded-full w-2 h-2`, className)}
			style={{
				backgroundColor: color,
			}}
			{...props}
		></div>
	);
}
