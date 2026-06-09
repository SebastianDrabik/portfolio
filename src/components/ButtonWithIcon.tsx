import { Button } from "./ui/button";
import { cn } from "#/lib/utils.ts";

export function ButtonWithIcon({
	icon: Icon,
	iconColor,
	iconSize,
	children,
	className,
	...props
}: {
	icon: React.ElementType;
	iconColor?: React.CSSProperties["color"];
	iconSize?: number;
} & React.ComponentProps<typeof Button>) {
	return (
		<Button {...props} className={cn("flex items-center gap-2", className)}>
			<Icon
				data-icon="inline-start"
				style={iconColor ? { color: iconColor } : undefined}
				className={`size-${iconSize || 5}`}
			/>
			{children}
		</Button>
	);
}
