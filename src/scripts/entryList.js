/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/

const renderJournalEntries = {
    entryMaker (entries)  {
    for (individualEntry of entries) {
        const entryHTML = makeJournalEntryComponent.journalEntry(individualEntry)
        const journalElement = document.querySelector(".entryLog")
        journalElement.innerHTML += entryHTML
        }
    }
}
    