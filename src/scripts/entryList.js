/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
import makeJournalEntryComponent from "./entryComponent.js"
import API from "./data.js";


const renderJournalEntries = {

    makeDOM() {
        API.getJournalEntries().then(renderJournalEntries.entryMaker)
    },

    entryMaker(entries)  {
        const journalElement = document.querySelector("#entryLog")
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
       return entry
        },

    filterEntry(moodValue) {
       API.getJournalEntries().then(response => {
            let toDisplay = response.filter(entry => {
                return (entry.moodForTheDay.includes(moodValue)) 
            }) 
            renderJournalEntries.entryMaker(toDisplay)   
            })
    },
    clearDataField() {
        document.querySelector("#entryId").value = ""
            document.querySelector("#journalDate").value = ""
            document.querySelector("#conceptsCovered").value = ""
            document.querySelector("#journalEntry").value = ""
            document.querySelector("#moodForTheDay").value = ""
    }
}

export default renderJournalEntries;