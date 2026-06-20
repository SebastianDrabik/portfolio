import { Section } from "#/components/Section.tsx";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "#/components/ui/card.tsx";

import { LuMapPin } from "react-icons/lu";
import { FaGlobeEurope } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import type { IconType } from "react-icons";

function AboutCard({
	title,
	children,
	icon: Icon,
}: {
	title: string;
	children: React.ReactNode;
	icon: IconType;
}) {
	return (
		<Card className="p-4 gap-0">
			<CardHeader className="m-0 p-0">
				<CardTitle className="uppercase text-primary font-jetbrains-mono text-xs flex items-center gap-1.5">
					<Icon /> {title}
				</CardTitle>
			</CardHeader>
			<CardContent className="p-0 m-0 text-sm">{children}</CardContent>
		</Card>
	);
}

export function AboutSection() {
	return (
		<Section tag={"about"}>
			<div className="grid grid-cols-3 gap-3 md:gap-12">
				<article className="col-span-3 md:col-span-2">
					<p>
						Cześć! Jestem <span className="text-foreground">Sebastian</span> i
						pasjonuję się programowaniem odkąd skończyłem 12 lat. Zaczynałem od
						pluginów do Minecrafta w Javie i tworzenia własnych serwerów.
					</p>
					<p className="mt-2">
						Pasję tę przeniosłem później na swoje wykształcenie i ukończyłem
						technikum, podczas którego aktywnie rozszerzałem swoje kompetencje
						startując w różnych{" "}
						<span className="text-foreground">konkursach i olimpiadach</span>,
						na potrzeby których stworzyłem{" "}
						<span className="text-foreground">3 gry komputerowe</span>,{" "}
						<span className="text-foreground">algorytmy AI</span>, a nawet{" "}
						<span className="text-foreground">kompleksowy projekt GovTech</span>
						.
					</p>
					<p className="mt-2">
						Każda z tych prac została{" "}
						<span className="text-foreground">
							nagrodzona na szczeblu ogólnopolskim lub wojewódzkim
						</span>
						, a w trakcie ich tworzenia uczyłem się nie tylko planowania,
						programowania czy prezentowania projektów, ale także zdobywałem
						umiejętności miękkie - praca w zespole i komunikacja.
					</p>
					<p className="mt-2">
						Wkrótce rozpoczynam studia, a w wolnym czasie realizuję
						projekty webowe z wykorzystaniem{" "}
						<span className="text-foreground">Reacta, TypeScripta oraz Dockera</span> a
						także pracuję z serwerami{" "}
						<span className="text-foreground">Oracle</span> i systemem{" "}
						<span className="text-foreground">Linux</span>.
					</p>
				</article>
				<div className="col-span-3 md:col-span-1 flex flex-col gap-3">
					<AboutCard title={"status"} icon={FaHandshakeSimple}>
						Otwarty na oferty / freelance
					</AboutCard>
					<AboutCard title={"wykształcenie"} icon={FaGraduationCap}>
						Średnie - technik programista
					</AboutCard>
					<AboutCard title={"lokalizacja"} icon={LuMapPin}>
						38-400 Krosno, Podkarpackie, Polska
					</AboutCard>
					<AboutCard title={"języki"} icon={FaGlobeEurope}>
						Polski(ojczysty) • Angielski(B2)
					</AboutCard>
				</div>
			</div>
		</Section>
	);
}
