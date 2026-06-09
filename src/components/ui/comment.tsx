import { cn } from "#/lib/utils.ts";

export function CommentSpan(props: React.HTMLProps<HTMLSpanElement>) {
	return (
		<span className={cn("text-gray-500 font-mono", props.className)}>
			&#47;&#47; {props.children}
		</span>
	);
}
