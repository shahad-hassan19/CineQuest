import { useLoaderData } from "react-router"


export default function Title() {

    const data = useLoaderData()
    return (
        <>
        {
            data ? (
                <div className="mt-40 flex flex-col items-center">
                    <div><img src={data.Poster} className="w-60 h-96 flex " /></div>
                    <div className="w-full px-10 md:px-0 md:w-1/2 lg:w-1/3 flex flex-col justify-center text-start font-semibold">
                    <div className="self-center text-2xl">
                        {data.Title}
                    </div>
                    <div>
                        Star Cast: <span className="text-yellow-300">{data.Actors}</span>
                    </div>
                    <div>
                        Release Year: <span className="text-yellow-300">{data.Year}</span>
                    </div>
                    <div>
                        Director: <span className="text-yellow-300">{data.Director}</span>
                    </div>
                    <div>
                        Genre: <span className="text-yellow-300">{data.Genre}</span>
                    </div>
                    <div>
                        Languages: <span className="text-yellow-300">{data.Language}</span>
                    </div>
                    <div>
                        Country: <span className="text-yellow-300">{data.Country}</span>
                    </div>
                    <div>
                        Plot: <span className="text-yellow-300">{data.Plot}</span>
                    </div>
                    </div>
                </div>
                ) : (
                    <div>
                    </div>
                )}
    </>
    )
}

