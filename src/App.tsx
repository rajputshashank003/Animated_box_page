import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import Component3 from "./components/Component3"

const App = () => {
    return (
        <div className="grid grid-rows-3 bg-black relative max-h-screen max-w-screen p-4 gap-4">
            <Component1/>
            <Component2/>
            <Component3/>
        </div>
    )
}

export default App