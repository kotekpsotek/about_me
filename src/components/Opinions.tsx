import { Rating } from "flowbite-react";

interface SingleOpinion {
    imgLoc: string, // Location to image
    userName: string,
    description: string,
    rating: number, // range 1 - 5
    date: Date,
    project: {
        name: string,
        reference?: URL
    }
}

interface Props {
    opinions: SingleOpinion[]
}

export function Opinions(args: Props) {
    return (
        <div>
            <div className="flex gap-5 items-center text-2xl text-white">
                <h2 className="text-4xl font-bold">Opinions</h2>
                <div className="w-full h-full flex items-center">
                    <Rating>
                        <Rating.Star />
                        <p className="ml-2 text-md font-bold text-gray-100 dark:text-white">4.97</p>
                        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-100 dark:bg-gray-400" />
                        <a href="#" className="text-md font-medium text-gray-200 underline hover:no-underline dark:text-white">
                            {args.opinions.length} reviews
                        </a>
                        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-100 dark:bg-gray-400" />
                        <p className="text-sky-200">318 opinions</p>
                    </Rating>
                </div>
            </div>
            <div className="opinions-brd p-2 md:p-0 flex gap-5 items-start flex-wrap mt-4">
                {
                    args.opinions.map(op => {
                        return (
                            <div className="opinion bg-gray-200 w-full md:w-fit p-4 rounded" style={{ maxWidth: "610px" }}>
                                <div className="flex gap-3" id="opinion-cols">
                                    <div id="img">
                                        <img className="w-14 h-14 rounded-full" src={op.imgLoc} alt="Profile image"/>
                                    </div>
                                    <div id="textual-content" style={{ width: "calc(100% - 56px)" }}>
                                        <div className="visible-data flex gap-8">
                                            <div className="name-date flex gap-2 items-center">
                                                <h2 className="text-lg font-bold text-slate-500">{op.userName}</h2>
                                                <p className="text-slate-400 text-sm">{op.date.toDateString()}</p>
                                            </div>
                                            <Rating>
                                                <Rating.Star />
                                                <Rating.Star />
                                                <Rating.Star />
                                                <Rating.Star />
                                                <Rating.Star />
                                            </Rating>
                                        </div>
                                        <div className="pl-1 text-lg font-bold cursor-pointer relative mt-1.5" id="project-name">
                                            <p className="text-black uppercase absolute" style={{ bottom: "14px", fontSize: "7px", width: "fit-content", height: "fit-content" }}>project name</p>
                                            <p className="text-zinc-500 underline">{op.project.name}</p>
                                            {op.project.reference ? <a href={op.project.reference.toString()}>Check</a> : null}
                                        </div>
                                        <div id="description" className="mt-2 text-black">
                                            <p>{op.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <button className="mt-7 bg-white text-black font-bold text-center w-full p-2 rounded capitalize" onClick={_ => window.location.assign("/new-opinion")}>Add your opinion</button>
        </div>
    )
}