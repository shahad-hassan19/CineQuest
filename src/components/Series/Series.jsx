import Hero from "./Hero";
import TopRated from './TopRated';
import Popular from './Popular';

export default function Series() {
    return (
        <div className="mt-44 md:mt-36">
            <Hero/>
            <Popular/>
            <TopRated/>
        </div>
    )
}

