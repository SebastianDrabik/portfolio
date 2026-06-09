import { useState, useEffect } from "react";
import { cn } from "#/lib/utils.ts";

export interface TypewriterProps {
	phrases: string[];
	/** Custom terminal prefix/prompt. Default: "$ " */
	prefix?: string;
	/** Delay between keystrokes while typing (ms). Default: 80 */
	typeSpeed?: number;
	/** Delay between keystrokes while deleting (ms). Default: 40 */
	deleteSpeed?: number;
	/** Pause after fully typing a phrase, before deleting (ms). Default: 2000 */
	pauseAfter?: number;
	/** Pause before typing starts on each phrase (ms). Default: 300 */
	pauseBefore?: number;
	/** Show a blinking cursor. Default: true */
	cursor?: boolean;
	/** Character used as cursor. Default: "█" */
	cursorChar?: string;
	className?: string;
	cursorClassName?: string;
	/** CSS class specifically for the prompt prefix */
	prefixClassName?: string;
}

type Phase = "waiting" | "typing" | "pausing" | "deleting";

export default function Typewriter({
	phrases,
	prefix = "user@sdrabik.dev:~$ ",
	typeSpeed = 80,
	deleteSpeed = 40,
	pauseAfter = 2000,
	pauseBefore = 300,
	cursor = true,
	cursorChar = "█",
	className,
	cursorClassName,
	prefixClassName,
}: TypewriterProps) {
	const [displayed, setDisplayed] = useState("");
	const [phase, setPhase] = useState<Phase>("waiting");
	const [phraseIndex, setPhraseIndex] = useState(0);

	useEffect(() => {
		if (!phrases.length) return;

		const currentPhrase = phrases[phraseIndex];
		let timer: ReturnType<typeof setTimeout>;

		switch (phase) {
			case "waiting":
				timer = setTimeout(() => {
					setPhase("typing");
				}, pauseBefore);
				break;

			case "typing":
				if (displayed === currentPhrase) {
					setPhase("pausing");
				} else {
					timer = setTimeout(() => {
						setDisplayed(currentPhrase.slice(0, displayed.length + 1));
					}, typeSpeed);
				}
				break;

			case "pausing":
				timer = setTimeout(() => {
					setPhase("deleting");
				}, pauseAfter);
				break;

			case "deleting":
				if (displayed === "") {
					setPhraseIndex((prev) => (prev + 1) % phrases.length);
					setPhase("waiting");
				} else {
					timer = setTimeout(() => {
						setDisplayed(displayed.slice(0, -1));
					}, deleteSpeed);
				}
				break;
		}

		return () => clearTimeout(timer);
	}, [
		displayed,
		phase,
		phraseIndex,
		phrases,
		typeSpeed,
		deleteSpeed,
		pauseBefore,
		pauseAfter,
	]);

	return (
		<span
			className={className}
			style={{
				fontFamily: "monospace",
				display: "inline-flex",
				alignItems: "center",
			}}
		>
			{/* Bash Prompt Prefix */}
			{prefix && (
				<span
					className={cn("text-gray-300", prefixClassName)}
					style={{ marginRight: "0.25rem", userSelect: "none" }}
				>
					{prefix}
				</span>
			)}

			{/* Typed Content */}
			<span>{displayed}</span>

			{/* Blinking Cursor */}
			{cursor && (
				<span
					className={cursorClassName}
					style={{
						animation: "tw-blink 1s step-end infinite",
						marginLeft: "1px",
					}}
					aria-hidden="true"
				>
					{cursorChar}
				</span>
			)}
			<style>{`
                @keyframes tw-blink {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0; }
                }
            `}</style>
		</span>
	);
}
