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
        "moodId": document.querySelector("#moodForTheDay").value
       }
       return entry
    
        },

    filterEntry(moodValue) {
       API.getJournalEntries().then(response => {
            let toDisplay = response.filter(entry => {
                return (entry.mood.id == moodValue) 
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
                if (entry.journalDate === "" | entry.conceptsCovered === "" | entry.journalEntry === "" | entry.moodId === "") {
                    window.alert("All fields must be filled out")
                }
                else {
                API.postSingleEntry(entry)
                .then(() => {
                    renderJournalEntries.makeDOM()
                    document.querySelector("#all").checked=true
                    renderJournalEntries.clearDataField()
                    document.querySelector(".newButton").classList=("newButton")
                    }
                )}
            }
            else {
                let entry = renderJournalEntries.makeEntryObject();
                if (entry.journalDate === "" | entry.conceptsCovered === "" | entry.journalEntry === "" | entry.moodId == "") {
                    window.alert("All fields must be filled out")
                }
                else {
                API.updateEntry(objectId, entry)
                .then(() => {
                    renderJournalEntries.makeDOM()
                    document.querySelector("#all").checked=true
                    renderJournalEntries.clearDataField()
                    document.querySelector(".newButton").classList=("newButton")
                    }
                    )
                }}
            }
        )
    },
    enableDiscardButton() {
        document.querySelector("#discardButton").addEventListener("click", event => {
            renderJournalEntries.clearDataField()
            document.querySelector(".newButton").classList=("newButton")
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
        document.querySelector("#all").addEventListener("click", event => {
                API.getJournalEntries().then(renderJournalEntries.entryMaker)
                })
        moods.forEach(mood => {
            document.querySelector(`#${mood.moodName}`).addEventListener("click", event => {
                  let moodValue = event.target.value
                    renderJournalEntries.filterEntry(moodValue)
                    })
        });
    }
}

export default renderJournalEntries;