import navbar from "../navbar/navbar"

function header() {
    return (
        `
        <header class="header">
        header
        ${navbar(['Home', 'Features', 'Pricing'])}
        </header>
        `
    )
}

export default header
