import Hero from "./Hero";
import TopRated from './TopRated';
import Popular from './Popular';

export default function Series() {
    return (
        <div className="mt-20">
            <Hero/>
            <Popular/>
            <TopRated/>
        </div>
    )
}

