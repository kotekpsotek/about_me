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
                    </Rating>
                </div>
            </div>
            <div className="opinions-brd">
                {
                    args.opinions.map(op => {
                        return (
                            <div className="opinion mt-4 ">
                                <div className="visible-data flex gap-8">
                                    <div className="name-date flex gap-2 items-center">
                                        <h2 className="text-lg font-bold  text-gray-200">{op.userName}</h2>
                                        <p className="text-gray-300 text-sm">{op.date.toDateString()}</p>
                                    </div>
                                    <Rating>
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                    </Rating>
                                </div>
                                <div className="project-name">
                                    <p>{op.project.name}</p>
                                    {op.project.reference ? <a href={op.project.reference.toString()}>Check</a> : null}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            
        </div>
    )
}