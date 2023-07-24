import { tipper } from "./database.js"

export const tipsList = () => {
    // Invoke the function that you imported from the database module
    const tippys = tipper()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipsList">'

    // Create HTNL representations of each fish here
    for (const tip of tippys) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="Tips card">
            <div class="Tips_title">${tip.title}</div>
            <div class="Tips_description">${tip.description}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
