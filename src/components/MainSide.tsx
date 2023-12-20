import { useEffect, useId, useState } from "react";
import imgProfile from "../assets/profile-img.jpg"
import { TypeAnimation } from "react-type-animation";
import TechStackBranch from "./TechStackBranch";

// Animations
import RocketAnimation from "../assets/rocket-animation.svg"

// Portfolio
import createAirline from "../assets/portfolio/airlinemanager/create-airline.png";
import createRoute from "../assets/portfolio/airlinemanager/create-route.png";
import userRoutes from "../assets/portfolio/airlinemanager/your-routes.png";
import fuelMarket from "../assets/portfolio/airlinemanager/fuel-market.png";
import analisysDashboard from "../assets/portfolio/airlinemanager/analisys-dashboard.png";

// Images
    // Languages
import JSimg from "../assets/js.png";
import TSimg from "../assets/ts.png";
import NodeJS from "../assets/node.svg";
import Rust from "../assets/rust.png";
import Python from "../assets/python.jpg";
import React from "../assets/react.svg";
import Svelte from "../assets/svelte.png";
import SvelteKit from "../assets/SvelteKit.jpg";
import Tauri from "../assets/tauri.svg";
import Nativescript from "../assets/nativescript.png";
    // Databses
import Redis from "../assets/redis.png";
import MongoDB from "../assets/mongoDB.png";
import Cassandra from "../assets/ApacheCassandra.png";
import PostgreSQL from "../assets/PostgreSQL.png";
import MariaDB from "../assets/MariaDB.png";
    // Tools
import Docker from "../assets/docker.png";
import SvGator from "../assets/svgator.jpg"

export default function Main() {
    let [isCollapsedPortfolio, setPortfolioCollpased] = useState(true);

    /* Handle show animation */
    // const [refInView, inView, entry] = useInView({
    // //     threshold: 0.75
    // // });

    // Ass soon as component is mounted or some state 
    let rocketAnimationDisplay = false;
    let timeoutRocket: NodeJS.Timeout | null = null;
    useEffect(() => {
        const url = new URL(document.URL);

        if (url.hash && window.scrollY == 0) {
            document.getElementById(url.hash.replace("#", ""))?.scrollIntoView();
        }

        const observer = new IntersectionObserver(entries => {
            const removeAnimation = () => {
                const tg = document.getElementById('animation-rocket-obj');
                if (tg) tg.remove();
                rocketAnimationDisplay = false;
                timeoutRocket = null;
                console.log(tg)
            }
            
            const animationLoaded = () => {
                timeoutRocket = setTimeout(removeAnimation, 3_000);
            };

            entries.forEach(en => {
                if (en.isIntersecting && !rocketAnimationDisplay) {
                    rocketAnimationDisplay = true;
                    const element = (function() {
                        const animationObject = document.createElement("object");
                        animationObject.id = 'animation-rocket-obj';
                        animationObject.className = 'w-full h-fit md:h-full absolute bottom-1/2 md:bottom-0 md:top-0 md:right-0 overflow-hidden';
                        animationObject.type = 'image/svg+xml';
                        animationObject.data = RocketAnimation;
                        animationObject.textContent = "svg-animation";
                        animationObject.onload = animationLoaded
                        return animationObject;
                    })();
                    const after = document.getElementById("portfolio")!;
                    after.parentNode!.insertBefore(element, after);
                }
                else if (!en.isIntersecting && document.getElementById('animation-rocket-obj')) {
                    document.getElementById('animation-rocket-obj')?.remove();
                    rocketAnimationDisplay = false;
                    if (timeoutRocket) {
                        clearTimeout(timeoutRocket);
                        timeoutRocket = null;
                    }
                }
            });
        }, { threshold: 0.75 });
        observer.observe(document.getElementById("img-bg-wr")!);
    }, []);
    
    let itEration = 0;
    function setTypoColor(cls: string, previous?: string) {
        const main = () => {
            const el = document.getElementsByClassName("sequence-typer")[0];
            if (previous && el?.classList?.contains(previous)) el.classList.remove(previous);
            el?.classList?.add(cls);
            itEration += 1;
        }

        const timeout = itEration != 0 ? 900 : 0;
        setTimeout(main, timeout);
    }

    const portfolioItems: {
        name: string,
        description: string,
        link?: string,
        iframe?: string,
        video?: string,
        images?: {
            src: string,
            alt: string
        }[]
    }[] = [
        { name: "WastleDB", description: "SQL database in Rust", link: "https://github.com/kotekpsotek/wastledb", iframe: "/wastle_db.html" },
        { name: "WastleDB Manager", description: "GUI management solution for WastleDB", link: "https://github.com/kotekpsotek/wastledb-gui-tool", iframe: "/wastle_db_manager.html" },
        { name: "Instagram Mobile App", description: "Instagram mobile app clone", link: "https://github.com/kotekpsotek/instagram", iframe: "/instagram.html" },
        { name: "Shopizard", description: "Open Source shop creation and management platform", link: "https://github.com/kotekpsotek/shop_creator", iframe: "/shopizard.html" },
        { name: "VeloStore", description: "Bike shop for every Velo Lover", link: "https://github.com/kotekpsotek/VeloStore", video: "https://www.youtube.com/embed/TF8mp2OVNvI?si=ukZSl1SYIET3b4D6" },
        { name: "@opinions-board/svelte", description: "Open source opinions solution for Svelte as NPM Component", link: "https://www.npmjs.com/package/@opinions-board/svelte", iframe: "/opinionsboard.html" },
        { name: "@svelte-chat", description: "Easy to use on page NPM Chat Addon for Svelte", link: "https://www.npmjs.com/package/@svelte-chat/install_all", iframe: "sveltechat.html" },
        { name: "airline-manager-game", description: "Here you can incarnate in Airline Manager Role in your browswer", images: [{ src: createAirline, alt: "Create Airline"}, { src: createRoute, alt: "Create route"}, { src: userRoutes, alt: "User routes"}, { src: fuelMarket, alt: "Fuel Market"}, { src: analisysDashboard, alt: "Analisys Dashboard"}] },
        { name: "CaterChef", description: "Catering Service", link: "https://github.com/kotekpsotek/catering-website", iframe: "/catering.html" },
        { name: "Keyboard_Sounds", description: "Imagine that every key can be amazing sound? Transform yourself in DJ without additional equipement", link: "https://github.com/kotekpsotek/keyboard_sounds", iframe: "/keyboardsounds.html" },
        { name: "microsoft-teams-automation", description: "Tool automates scheduled meetings in MS Teams", link: "https://github.com/kotekpsotek/microsoft-teams-automatization", iframe: "/teamsautomation.html" },
        { name: "Mobile Journal", description: "Mobile journalist application harvesting polish top media in bucket", link: "https://github.com/kotekpsotek/mobile-journal", iframe: "/mobilejournal.html" },
        { name: "awesome-instaling", description: "Powerfull bot for instaling.pl website", link: "https://github.com/kotekpsotek/awesome-instaling", iframe: "/awesomeinstaling.html" },
        { name: "opengl-with-rust", description: "OpenGL usage from Rust via 'glium' safe bindings", link: "https://github.com/kotekpsotek/OpenGL-with-Rust" }
    ]

    const spawnPortfolioItems = portfolioItems.map(
        ({ name, description, link, video, images, iframe }) => {
            return (
                <a className="semi-card" key={useId()} href={link || ""}>
                    <div id="text">
                        <h4 className="text-xl font-semibold">{name}</h4>
                        <p className="h-full">{description}</p>
                    </div>
                    {
                        video 
                        ?
                        <iframe src={video}></iframe>
                        :
                        null
                    }
                    {
                        images
                        ?
                        (
                            <div className="portfolio-imgs-item">
                                {images.map((imgParams, i) => {
                                    return <img key={`pii-${i}`} {...imgParams}/>
                                })}
                            </div>
                        )
                        :
                        null
                    }
                    {
                        !video && !images && iframe
                        ?
                        <iframe src={iframe} style={{ pointerEvents: "none", overflow: "scroll" }}/>
                        :
                        null
                    }
                </a>
            )
        }
    )
    
    const bucketLanguagesFrameworks = { 
        name: "Languages and Frameworks", 
        bucket: [
            { 
                name: "JavaScript",
                desc: "I love so much",
                imgSrc: JSimg
            },
            { 
                name: "TypeScript",
                desc: "I cheat JavaScript with",
                imgSrc: TSimg
            },
            { 
                name: "Node.js",
                desc: "Multi-tool for WebDevelopement but not only 😍",
                imgSrc: NodeJS
            },
            { 
                name: "Rust",
                desc: "I'm in sick love with. Is all about turn of low-level, reliable, safe systems with pleasant developement experiences",
                imgSrc: Rust
            },
            {
                name: "Python",
                desc: "Really efficient one toward production",
                imgSrc: Python
            },
            {
                name: "React",
                desc: "Shockingly robust and popular JS environemnt friend",
                imgSrc: React
            },
            {
                name: "Svelte",
                desc: "You know that feeling when everything is totally clever? I constantly because this tool gives me ability to build web apps conveniently by each step. Transparency, rapidiness, robust and efficiency its keyrules 💘❤️❤️",
                imgSrc: Svelte
            },
            {
                name: "SvelteKit",
                desc: "My desired meta-framework for Svelte, featuring: SSR, SSG, SPA, MPA, abreviating in pleasure everything",
                imgSrc: SvelteKit
            },
            {
                name: "Tauri",
                desc: "Breaks collusion of mickey in build efficient desktop profesional app with ease of use WebDev techs like: React and Svelte",
                imgSrc: Tauri
            },
            {
                name: "Nativescript",
                desc: "Remarkable framework to make mobile apps with use of Web-Teach like mentioned loved Svelte, React",
                imgSrc: Nativescript
            }
        ] 
    }
    const bucketDatabases = {
        name: "Databases",
        bucket: [
            { 
                name: "Redis",
                desc: "Blazing fast storage with persitance capabilities",
                imgSrc: Redis
            },
            { 
                name: "MongoDB",
                desc: "The best for security, consistance, rich types, agile, ease of use, rich aggregation, shocking performance, drives for almost every tech, breathtaking shine documentation ",
                imgSrc: MongoDB
            },
            {
                name: "Cassandra",
                desc: "The best for BigData, persiatance, avaiability, effiency for most cases, CQL is pleasant Query Language, hight in my ranking with open-source",
                imgSrc: Cassandra
            },
            {
                name: "PostgreSQL",
                desc: "Really flexible open source database supporting GIS apps demands",
                imgSrc: PostgreSQL
            },
            {
                name: "MariaDB",
                desc: "Maria gives me efficiency and has great community support",
                imgSrc: MariaDB
            }
        ]
    }
    const bucketTools = {
        name: "Tools",
        bucket: [
            { 
                name: "Docker",
                desc: "Developement with him started be gritty-nitty",
                imgSrc: Docker
            },
            {
                name: "SvGator",
                desc: "My gorgeous friend in make SVG Animations",
                imgSrc: SvGator
            }
        ]
    }
    return (
        <>
            <div id="all" className="flex flex-col gap-y-20 overflow-x-hidden md:px-5">
                <div id="wr" className="w-screen h-screen flex justify-center items-center px-4 gap-x-8 lg:gap-x-14">
                    <div id="txt" className="text-white">
                        <p className="text-xs uppercase text-slate-500">Welcome in my world</p>
                        <h1 className="text-3xl font-bold">Welcome, I'm Michał Szczepański</h1>
                        {/* <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-sky-800 to-sky-200">JS Developer</h2> */}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                () => setTypoColor("js-typo", "py-typo"),
                                'JS Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                () => setTypoColor("ts-typo", "js-typo"),
                                'TypeScript Developer',
                                1000,
                                () => setTypoColor("rs-typo", "ts-typo"),
                                'Rust Developer',
                                1000,
                                () => setTypoColor("py-typo", "rs-typo"),
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
                            <a className="border border-white rounded text-white p-2" href="/contact">Contact</a>
                        </div>
                    </div>
                    <img src={imgProfile} alt="" className="hidden md:block h-3/6 w-3/6 lg:w-fit object-contain"/>
                </div>
                <div id="img-bg-wr" className="img-bg-wrapper" /* ref={refInView} */>
                    <div id="about-me" className="ios-like-widget text-white p-5 flex flex-col gap-y-3">
                        <h2 className="text-3xl font-bold">About me</h2>
                        <p className="desc mt-2">
                            I'm 19'yo full-stack software developer with 5 years of experience in web-developement, desktop-developement and mobile. I've strong will to solve problems and learning. I'm self-player but I like to make solutions in teams too. My hobby is bike and aeronautic topics. You need attractive design, error safe backend or maybe mobile app experiences? <a href="/contact" className="underline">You can contact with me!</a>
                        </p>
                        <a className="btn-chtch-stck mt-3" href="#tech-stack">Check my tech stack</a>
                    </div>
                </div>
                {/* {
                    inView && entry!.boundingClientRect.top >= 0
                    ? 
                    <object id="animation-rocket-obj" className="w-full h-fit md:h-full absolute bottom-1/2 md:bottom-0 md:top-0 md:right-0 overflow-hidden" type="image/svg+xml" data={RocketAnimation} onLoad={animationLoaded}>svg-animation</object>
                    :
                    null
                } */}
                <div id="portfolio" className="card border-teal-100">
                    <h2 className="text-2xl text-teal-100 font-bold">Portfolio</h2>
                    <p className="desc">I'm proud to present my projects</p>
                    <div className={`items ${isCollapsedPortfolio ? "collapsed": ""}`}>
                        {spawnPortfolioItems}
                    </div>
                    <button className="font-semibold underline text-sky-400 mt-2" onClick={() => setPortfolioCollpased(!isCollapsedPortfolio)}>
                        {isCollapsedPortfolio ? 'Show more' : 'Hide most'}
                    </button>
                </div>
                <div id="tech-stack" className="card border-none flex flex-col">
                    <h2 className="text-3xl text-orange-100 font-bold">Tech stack</h2>
                    <p id="ts-desc">Here's what I use to</p>
                    <div className="flex flex-col gap-y-20">
                        <TechStackBranch {...bucketLanguagesFrameworks}/>
                        <TechStackBranch {...bucketDatabases}/>
                        <TechStackBranch {...bucketTools}/>
                    </div>
                </div>
            </div>
        </>
    )
}