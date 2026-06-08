import { cn } from "#/lib/utils.ts";

export function CommentSpan(props: React.HTMLProps<HTMLSpanElement>) {
	return (
		<span
			className={cn("text-secondary-foreground bg-secondary", props.className)}
		>
			&sol;&sol; {props.children}
		</span>
	);
}
