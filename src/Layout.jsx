import Hero from "./components/Hero"
import Action from './components/Action'
import Drama from './components/Drama'

function Layout() {
    return (
        <div className="mt-36">
            <Hero/>
            <Action/>
            <Drama/>
        </div>
    )
}

export default Layout