import { locator } from "./database.js"

export const spotList = () => {
    // Invoke the function that you imported from the database module
    const spottys = locator()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="spotList">'

    // Create HTNL representations of each fish here
    for (const spots of spottys) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="spots card">
            <div class="spots_location">${spots.location}</div>
            <div class="spots_description">${spots.description}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}