/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
import makeJournalEntryComponent from "./entryComponent.js"
import API from "./data.js";


const renderJournalEntries = {
    // getMoods() {
    //     API.getMoods()
    //     .then(() => renderJournalEntries.moodFilterField(availableMoods))
    // },

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
        document.querySelector("#dataForm").innerHTML= ``
    },
    enableSaveButton() {
        document.querySelector("#saveButton").addEventListener("click", event => {
            const objectId = document.querySelector("#entryId").value
            if (objectId === "") {
                let entry = renderJournalEntries.makeEntryObject();
                if (entry.journalDate === "" | entry.conceptsCovered === "" | entry.journalEntry === "" | entry.moodForTheDay === "") {
                    window.alert("All fields must be filled out")
                }
                else {
                API.postSingleEntry(entry)
                .then(() => {
                    renderJournalEntries.makeDOM()
                    renderJournalEntries.clearDataField()
                    }
                )}
            }
            else {
                let entry = renderJournalEntries.makeEntryObject();
                if (entry.journalDate === "" | entry.conceptsCovered === "" | entry.journalEntry === "" | entry.moodForTheDay === "") {
                    window.alert("All fields must be filled out")
                }
                else {
                API.updateEntry(objectId, entry)
                .then(() => {
                    renderJournalEntries.makeDOM()
                    renderJournalEntries.clearDataField()
                    }
                    )
                }}
            }
        )
    },
    enableDiscardButton() {
        document.querySelector("#discardButton").addEventListener("click", event => {
            renderJournalEntries.clearDataField()
           }
        )
    },
    entryField(moods) {
        makeJournalEntryComponent.entryFieldsetBuilder(moods);
        renderJournalEntries.enableSaveButton();
        renderJournalEntries.enableDiscardButton()
    },
    moodFilterField(moods) {
        makeJournalEntryComponent.moodFilterFieldsetBuilder(moods)
    }
}

export default renderJournalEntries;