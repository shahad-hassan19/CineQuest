import { useLoaderData } from "react-router"
import '../CSS/Card.css'

export default function MovieDetail() {
    const data = useLoaderData()

    return (
        <>
            <div className="mt-40 flex flex-col md:flex-wrap md:flex-row gap-5 md:px-12 justify-around items-center">
                {
                    (data && data.poster_path) ? (
                        <div className="flex flex-col items-center">
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className="w-60 h-96 flex" />
                            </div>
                            <div className="w-full px-10 md:px-0 md:w-1/2 lg:w-1/3 flex flex-col justify-center text-start font-semibold">
                                <div className="self-center text-2xl">
                                    {data.title}
                                </div>
                                <div>
                                    Release Date: <span className="text-yellow-300">{data.release_date}</span>
                                </div>
                                <div>
                                    Duration: <span className="text-yellow-300">{data.runtime} minutes</span>
                                </div>
                                <div>
                                    Languages: <span className="text-yellow-300">{data.original_language}</span>
                                </div>
                                <div>
                                    Plot: <span className="text-yellow-300">{data.overview}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-screen flex items-center justify-center text-3xl font-bold">
                            Results not found!
                        </div>
                    )
                }
            </div>
        </>
    )
}

