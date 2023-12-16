import { Email as EmailIcon, LogoYoutube, LogoNpm, LogoGithub } from "@carbon/icons-react"
import { MouseEventHandler, useState } from "react";
import { Tooltip, Alert, type AlertProps } from "flowbite-react";
import UpBar from "./UppBar";

export const Email = "michalszczepanski_1@protonmail.com";
export const Github = "https://github.com/kotekpsotek";
export const NPM = "https://www.npmjs.com/~kotekpsotek";
export const YouTube = "https://www.youtube.com/@kotekpsotek111"

export default function Contact(/* props: { className?: string } */) {
    interface Id {
        id?: string
    }
    
    interface Copy extends Id {
        type: "copy", text: string
    }

    interface Link extends Id {
        type: "link", link: string
    }

    interface Alert {
        name: string,
        type: AlertProps["color"],
        content: string
    }
    
    const [alert, setAlert] = useState<Alert | undefined>()

    /** Spawn contact record */
    const SpawnPText = (params: Link | Copy) => {
        const hndl: MouseEventHandler<HTMLSpanElement> = () => {
            switch (params.type) {
                case "copy":
                    navigator.clipboard.writeText(params.text);
                    setAlert({
                        name: "Text copied",
                        type: "info",
                        content: "Text is ready to paste 😊"
                    })
                break

                case "link":
                    window.location.assign(params.link);
                    setAlert({
                        name: "Redirecting",
                        type: "info",
                        content: "You're redirecting to " + params.link
                    })
                break;
            }
        }

        return (
            <Tooltip content={params.type == "copy" ? "Copy" : "Go to location"} className="flex flex-row" trigger="hover">
                <span id={params.id} onClick={hndl}>{YouTube}</span>
            </Tooltip>
        )
    }

    const SpawnAlert = () => {
        setTimeout(() => {
            setAlert(undefined);
        }, 155_000)
        
        return (
            <Alert color="info" className="absolute top-20 right-5" onClick={_ => setAlert(undefined)}>
                <span className="font-bold">Information!</span> <span className="font-medium">{alert!.name}</span> {alert!.content}
            </Alert>
        )
    }
    
    return (
        <>
            <UpBar/>
            {alert ? <SpawnAlert/> : null}
            <div className="eventually-contact w-full h-full p-2 overflow-x-hidden flex justify-center items-center">
                <div className="text-sm p-5 border border-lime-200 w-full md:w-fit">
                    <h2 className="text-3xl text-white font-bold">Contact</h2>
                    <div className="contact-manners mt-2">
                        <div className="flex">
                            <EmailIcon size={24} fill="white" className="img"/>
                            <p className="">
                                Email:
                                {<SpawnPText type="copy" text={Email}/>}
                            </p>
                        </div>
                        <div>
                            <LogoGithub size={24} fill="white" className="img"/>
                            <p>
                                Github:
                                {/* <span>{Github}</span> */}
                                {<SpawnPText type="link" link={Github}/>}
                            </p>
                        </div>
                        <div>
                            <LogoNpm size={24} fill="white" className="img"/>
                            <p>
                                NPM:
                                {<SpawnPText type="link" link={NPM}/>}
                            </p>
                        </div>
                        <div>
                            <LogoYoutube size={24} fill="white" className="img"/>
                            <p>
                                YouTube:
                                {<SpawnPText type="link" link={YouTube}/>}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
