import { useId } from "react";
import { OverflowMenuHorizontal } from "@carbon/icons-react";

export default function UpBar() {
    const actions: {name: string, url: string}[] = [
        {name: "Home", url: "/home"},
        {name: "Tech Stack", url: "/tech-stack"},
        {name: "Portfolio", url: "/portfolio"},
        {name: "Contact", url: "/contact"}
    ]
    
    const mapActions = ({ name, url }: typeof actions[0]) => {
        return <a href={url} key={useId()}>{name}</a>
    }

    return (
        <div className="w-screen h-14 fixed top-0 right-0 flex justify-between items-center px-5 text-slate-200 lg:px-10">
            <div id="self-company">
                <p className="font-bold">Kotekpsotek</p>
            </div>
            <div id="actions" className="relative">
                {/* TODO: create contact page function */}
                <button className="absolute right-0 md:invisible">
                    <OverflowMenuHorizontal size={28}/>
                </button>
                <div id="direct" className="invisible md:visible flex gap-x-5">
                    {
                        actions.map(mapActions)
                    }
                </div>
            </div>
        </div>
    )
}
