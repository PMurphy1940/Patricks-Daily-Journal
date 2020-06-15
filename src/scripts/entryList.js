/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
import makeJournalEntryComponent from "./entryComponent.js"

const renderJournalEntries = {
    entryMaker(entries)  {
        let individualEntry = []
    for (individualEntry of entries) {
        const entryHTML = makeJournalEntryComponent.journalEntry(individualEntry)
        const journalElement = document.querySelector(".entryLog")
        journalElement.innerHTML += entryHTML
        }
    }
}

export default renderJournalEntries;