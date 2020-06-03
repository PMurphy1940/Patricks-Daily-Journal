const journalEntries = [
    {
        journalDate: "05/20/2020",
        conceptsCovered: "Introduction to HTML",
        journalEntry: "We got our first taste of HTML today. Its exciting to actually see this work.",
        moodForTheDay: "Excited"
    },
    {
        journalDate: "05/21/2020",
        conceptsCovered: "Introduction to CSS",
        journalEntry: "We got our first taste of CSS today. I love playing around with the design elements.",
        moodForTheDay: "Excited"
    },
    {
        journalDate: "05/26/2020",
        conceptsCovered: "First group sprint",
        journalEntry: "Today we started our first group project. Building and styling a website. We chose The Shaggs",
        moodForTheDay: "Excited"
    }
]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    return `<div class="single entry">
                <ul>
                    <li>${journalEntry.journalDate}</li>
                    <li>${journalEntry.conceptsCovered}</li>
                    <li>${journalEntry.journalEntry}</li>
                    <li>${journalEntry.moodForTheDay}</li>
                </ul>
            </div>`
}
/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
for (individualEntry of journalEntries) {
    const entryHTML = makeJournalEntryComponent(individualEntry)
    const journalElement = document.querySelector(".entryLog")
    journalElement.innerHTML += entryHTML
    }
}

// Invoke the render function
renderJournalEntries(journalEntries)
