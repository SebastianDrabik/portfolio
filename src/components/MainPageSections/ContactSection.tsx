import { Section } from "../Section.tsx";
import { CommentSpan } from "#/components/ui/comment.tsx";
import { ButtonWithIcon } from "#/components/ButtonWithIcon.tsx";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "#/components/ui/button.tsx";
import { MdContentCopy } from "react-icons/md";
import { copyText } from "#/lib/clipboard-util.ts";

export function ContactSection() {
	function copyEmailAddress() {
		copyText("drabiksebastian@proton.me");
	}

	return (
		<Section title={"Dane kontaktowe i linki"} tag={"contact"}>
			<div className="flex flex-col place-items-center bg-card w-full rounded-sm py-10 px-6 border">
				<h2 className="text-4xl text-foreground">Skontaktuj się ze mną.</h2>
				<CommentSpan className="mt-2">
					otwarty na oferty · freelance · współpraca
				</CommentSpan>

				{/*  */}
				<div className="w-1/3 min-w-sm mt-6 rounded-sm overflow-hidden bg-gray-900 border border-primary flex items-center justify-between gap-2">
					<button
						type="button"
						className="p-3 hover:text-primary text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
						onClick={copyEmailAddress}
					>
						drabiksebastian@proton.me
					</button>
					<Button size="icon-lg" variant="ghost" onClick={copyEmailAddress}>
						<MdContentCopy />
					</Button>
				</div>

				<div className="mt-6 flex flex-wrap gap-4">
					<ButtonWithIcon icon={DiGithubBadge} variant="outline">
						<a
							href="https://github.com/SebastianDrabik"
							target="_blank"
							rel="noopener"
						>
							GitHub / SebastianDrabik
						</a>
					</ButtonWithIcon>
					<ButtonWithIcon icon={FaLinkedin} variant="outline">
						<a
							href="https://www.linkedin.com/in/sebastiandrabik/"
							target="_blank"
							rel="noopener"
						>
							LinkedIn / Sebastian Drabik
						</a>
					</ButtonWithIcon>
				</div>
			</div>
		</Section>
	);
}
