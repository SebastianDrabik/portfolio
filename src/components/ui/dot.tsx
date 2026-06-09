import { cn } from "#/lib/utils.ts";

const sizeMap = {
	1: "w-1 h-1",
	2: "w-2 h-2",
	3: "w-3 h-3",
	4: "w-4 h-4",
} as const;

export function Dot({
	className,
	color,
	dotSize = 1,
	...props
}: React.HTMLProps<HTMLDivElement> & {
	color: React.CSSProperties["color"];
	dotSize?: keyof typeof sizeMap;
}) {
	return (
		<div
			className={cn(`rounded-full shrink-0`, sizeMap[dotSize], className)}
			style={{
				backgroundColor: color,
			}}
			{...props}
		></div>
	);
}
