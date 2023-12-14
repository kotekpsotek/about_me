interface Props {
    name: string,
    bucket: {
        name: string,
        desc: string,
        imgSrc: string
    }[]
}

export default function Branch({ name, bucket }: Props) {
    let itSetps = 1; // Next item will be in oposite site to current
    const spawnBucketDash = bucket.map((d) => {
        itSetps += 1;
        return (
            <div className={`flex ${itSetps % 2 == 0 ? "self-start" : "self-end"} gap-x-4 max-w-2xl`}>
                <img src={d.imgSrc} alt="Tech image" className="tech-img"/>
                <div className="txt">
                    <h4 className="text-lg font-bold">{d.name}</h4>
                    <p>{d.desc}</p>
                </div>
            </div>
        )
    });

    
    return (
        <div className="w-full h-fit flex flex-col gap-y-8 mt-2">
            <h3 className="text-2xl font-extrabold text-center">{name}</h3>
            <div id="bucket" className="flex mt-2 flex-col gap-y-4 w-full h-fit pt-5">
                {spawnBucketDash}
            </div>
        </div>
    )
}