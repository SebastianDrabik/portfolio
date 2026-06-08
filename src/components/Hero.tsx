import HeroBg from "#/styles/HeroBackground.module.css"

export function Hero() {
    return <main className="w-full h-screen relative">
        <div className={HeroBg.container_hero}>
            <div className={HeroBg.stars}></div>
            <div className={HeroBg.stars2}></div>
            <div className={HeroBg.stars3}></div>
        </div>
        <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-zen-dots"}>
            <h1 className="text-7xl font-bold text-primary mb-4">Hi, I'm Sebastian Drabik</h1>
            <p className="text-xl text-gray-300">Software Engineer specializing in web development and cloud computing.</p>
        </div>
    </main>
}