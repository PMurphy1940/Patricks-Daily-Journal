/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
import makeJournalEntryComponent from "./entryComponent.js"
import API from "./data.js";


const renderJournalEntries = {
    entryMaker(entries)  {
        const journalElement = document.querySelector(".entryLog")
        journalElement.innerHTML = ''
    for (let individualEntry of entries) {
        const entryHTML = makeJournalEntryComponent.journalEntry(individualEntry)      
        journalElement.innerHTML += entryHTML
        }
    },
    makeEntryObject()  {
       let entry = {
        "journalDate": document.querySelector("#journalDate").value,
        "conceptsCovered": document.querySelector("#conceptsCovered").value,
        "journalEntry": document.querySelector("#journalEntry").value,
        "moodForTheDay": document.querySelector("#moodForTheDay").value
       }
       API.postSingleEntry(entry).then((API.getJournalEntries().then(renderJournalEntries.entryMaker)))
        }
    
}

export default renderJournalEntries;