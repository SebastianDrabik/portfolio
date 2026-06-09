import { cn } from "#/lib/utils.ts";

export function Dot({
	className,
	color,
	dotSize,
	...props
}: React.HTMLProps<HTMLDivElement> & {
	color: React.CSSProperties["color"];
	dotSize?: number;
}) {
	return (
		<div
			className={cn(
				`rounded-full w-${dotSize ?? 2} h-${dotSize ?? 2}`,
				className,
			)}
			style={{
				backgroundColor: color,
			}}
			{...props}
		></div>
	);
}
