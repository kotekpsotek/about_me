import { useState } from "react";
import { OverflowMenuHorizontal, Close } from "@carbon/icons-react";

export default function UpBar() {
    const [displayMobile, setDisplayMobile] = useState(false);
    const actions: {name: string, url: string}[] = [
        {name: "Home", url: "/"},
        {name: "Tech Stack", url: "/#tech-stack"},
        {name: "Portfolio", url: "/#portfolio"},
        {name: "Contact", url: "/contact"}
    ]
    
    const mapActions = ({ name, url }: typeof actions[0]) => {
        let className = "";
        if (name == "Contact") className = "p-2 bg-white text-black font-semibold rounded-md"
        
        return <a href={url} className={className} onClick={_ => displayMobile ? setDisplayMobile(false) : null}>{name}</a>
    }

    function closeMobile() {
        setDisplayMobile(false)
    }

    function openMobile() {
        setDisplayMobile(true);
    }

    /** Only for mobile devices */
    function makeContactMenu() {
        return (
            <div className="w-screen h-screen bg-main text-white absolute top-0 right-0 p-5 flex flex-col gap-y-5">
                <h2 className="text-xl font-bold text-center text-white">Menu</h2>
                <button id="close" className="absolute right-5 top-5 flex gap-x-2 justify-center items-center" onClick={closeMobile}>
                    <Close size={20} fill="#cbd5e1"/>
                    <p className="text-xs text-slate-400 uppercase small-caps">Close</p>
                </button>
                <div className="flex flex-col gap-y-2">
                    {actions.map(mapActions)}
                </div>
            </div>
        );
    }

    return (
        <div className="p-5 w-screen h-14 fixed top-0 right-0 flex justify-between items-center text-slate-200 z-10 lg:px-10 bg-main">
            <div id="self-company">
                <p className="font-bold">Kotekpsotek</p>
            </div>
            <div id="actions" className="relative">
                {/* TODO: create contact page function */}
                <button className="absolute right-0 top-2 md:invisible" onClick={openMobile}>
                    <OverflowMenuHorizontal size={28}/>
                </button>
                <div id="direct" className="invisible md:visible flex gap-x-5 items-center">
                    {
                        actions.map(mapActions)
                    }
                </div>
            </div>
            {displayMobile ? makeContactMenu() : null}
        </div>
    )
}
