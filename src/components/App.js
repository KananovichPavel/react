import header from "./header/header"
import main from "./main/main"
import footer from "./footer/footer"

function App() {
    return (
        `
        ${header()}
        ${main()}
        ${footer()}
        `
    )
}

export default App