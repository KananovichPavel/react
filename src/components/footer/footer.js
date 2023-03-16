import navbar from "../navbar/navbar"

function footer() {
    return (
        `
        <footer class="footer">
        footer
        ${navbar(['About', 'Contacts'])}
        </footer>
        `
    )
}

export default footer
