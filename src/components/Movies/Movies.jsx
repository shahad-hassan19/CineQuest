import Hero from "./Hero";
import Popular from "./Popular";
import Latest from "./Latest";

export default function Movies() {
    return (
        <div className="mt-20">
            <Hero/>
            <Popular/>
            <Latest/>
        </div>
    )
}

