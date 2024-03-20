import { useLoaderData } from "react-router"


export default function Title() {

    const data = useLoaderData()
    return (
        <div className="mt-28 flex flex-col items-center justify-around">
            <img src={data.Poster} className="w-60 h-96 flex "  />
            <div>
                {data.Title}
            </div>
            <div>
                {data.Year}
            </div>
            <div>
                {data.Actors}
            </div>
        </div>
    )
}

