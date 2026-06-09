import HeroBg from "#/styles/HeroBackground.module.css";
import Typewriter from "#/components/ui/typewriter.tsx";
import { Dot } from "#/components/ui/dot.tsx";

export function Hero() {
	// TODO: Hero background with canvas(p5.js)

	return (
		<main className="w-full h-screen relative snap-center">
			<div className={`${HeroBg.container_hero} absolute inset-0`}>
				<div className={HeroBg.stars}></div>
				<div className={HeroBg.stars2}></div>
				<div className={HeroBg.stars3}></div>

				<div className="absolute top-0 left-[2000px] bottom-0 right-0">
					<div className={HeroBg.stars}></div>
					<div className={HeroBg.stars2}></div>
					<div className={HeroBg.stars3}></div>
				</div>
			</div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
				<h1 className="text-7xl font-bold text-foreground">
					Sebastian
					<br />
					<span className="text-primary">Drabik</span>
				</h1>
				<div className="bg-card text-start p-3 rounded-sm flex flex-col absolute w-lg mt-8 left-1/2 -translate-x-1/2">
					<div className="flex flex-col items-center justify-center relative mb-3">
						<div className="flex gap-1 absolute left-0 top-1/2 -translate-y-1/2">
							<Dot color="#FD5E58" dotSize={2} />
							<Dot color="#FEBB2F" dotSize={2} />
							<Dot color="#2AC942" dotSize={2} />
						</div>
						<span className="font-mono text-gray-300 text-sm">
							user@sdrabik.dev
						</span>
					</div>
					<Typewriter
						phrases={[
							"backend dev",
							"competitive programmer",
							"hackathon finalist",
							"game developer",
						]}
						pauseAfter={2000}
						typeSpeed={80}
						deleteSpeed={40}
						prefix="~$"
						className="text-primary font-mono text-sm"
					/>
				</div>
			</div>
		</main>
	);
}
