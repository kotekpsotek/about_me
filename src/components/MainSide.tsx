import { useId, useState } from "react";
import imgProfile from "../assets/profile-img.jpg"
import { TypeAnimation } from "react-type-animation"

export default function Main() {
    let [isCollapsedPortfolio, setPortfolioCollpased] = useState(true)
    
    function setTypoColor(cls: string, previous?: string) {
        const el = document.getElementsByClassName("sequence-typer")[0];
        if (previous) el.classList.remove(previous);
        el.classList.add(cls);
    }
    
    const portfolioItems: {
        name: string,
        description: string,
        src?: string,
    }[] = [
        { name: "Test", description: "Lorem ipsum dolor set", src: "" },
        { name: "Test", description: "Lorem ipsum dolor set", src: "" },
        { name: "Test", description: "Lorem ipsum dolor set", src: "" },
        { name: "Test", description: "Lorem ipsum dolor set", src: "" },
        { name: "Test", description: "Lorem ipsum dolor set", src: "" },
    ]

    const spawnPortfolioItems = portfolioItems.map(
        ({ name, description, src }) => {
            return (
                <a className="semi-card" key={useId()} href={src}>
                    <div id="text">
                        <h4 className="text-xl font-semibold">{name}</h4>
                        <p className="h-full">{description}</p>
                    </div>
                    <img style={{ width: '250px', height: '250px' }} src={src}/>
                </a>
            )
        }
    )
    
    return (
        <>
            <div id="all"  className="flex flex-col gap-y-5">
                <div id="wr" className="w-screen h-screen flex justify-center items-center px-4 gap-x-8 lg:gap-x-14">
                    <div id="txt" className="text-white">
                        <p className="text-xs uppercase text-slate-500">Welcome in my world</p>
                        <h1 className="text-3xl font-bold">Welcome, I'm Michał Szczepański</h1>
                        {/* <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-sky-800 to-sky-200">JS Developer</h2> */}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                () => setTypoColor("js-typo"),
                                'JS Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                () => setTypoColor("ts-typo"),
                                'TypeScript Developer',
                                1000,
                                () => setTypoColor("rs-typo"),
                                'Rust Developer',
                                1000,
                                () => setTypoColor("py-typo"),
                                'Python Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="sequence-typer text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr"
                            // style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        <h3 className="text-lg font-semibold">based in Warsaw, Poland</h3>
                        <div className="mt-5 flex gap-x-4">
                            <a className="bg-white rounded text-black p-2" href="#about-me">About me</a>
                            <a className="border border-white rounded text-white p-2" href="/contac">Contact</a>
                        </div>
                    </div>
                    <img src={imgProfile} alt="" className="hidden md:block h-3/6 w-3/6 lg:w-fit object-contain"/>
                </div>
                <div id="portfolio" className="card">
                    <h2 className="text-2xl font-bold">Portfolio</h2>
                    <p className="desc">I'm proud to present my projects to you</p>
                    <div className={`items ${isCollapsedPortfolio ? "collapsed": ""}`}>
                        {spawnPortfolioItems}
                    </div>
                    <button className="font-semibold underline text-sky-400 mt-2" onClick={() => setPortfolioCollpased(!isCollapsedPortfolio)}>
                        {isCollapsedPortfolio ? 'Show more' : 'Hide most'}
                    </button>
                </div>
                <div id="about-me" className="w-full h-fit">
                    
                </div>
            </div>
        </>
    )
}