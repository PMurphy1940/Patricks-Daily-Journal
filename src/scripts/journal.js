import API from "./data.js";
import renderJournalEntries from "./entryList.js";

renderJournalEntries.makeDOM()


//save button listener
document.querySelector("#saveButton").addEventListener("click", event => {
    const objectId = document.querySelector("#entryId").value
    if (objectId === "") {
        let entry = renderJournalEntries.makeEntryObject();
        API.postSingleEntry(entry)
        .then(() => {
            renderJournalEntries.makeDOM()
            renderJournalEntries.clearDataField()
        })
        // .then((API.getJournalEntries().then(renderJournalEntries.entryMaker)))
        // renderJournalEntries.clearDataField()
        }
    else {
        API.updateEntry(objectId, renderJournalEntries.makeEntryObject())
        .then(() => {
            renderJournalEntries.makeDOM()
            renderJournalEntries.clearDataField()
            }
            )
        }
    }
)

//display mood buttons listener
document.querySelector("#all").addEventListener("click", event => {
//   let moodValue = event.target.value
    // console.log(moodvalue)
    // renderJournalEntries.entryMaker
    API.getJournalEntries().then(renderJournalEntries.entryMaker)
    }
)
document.querySelector("#happy").addEventListener("click", event => {
  let moodValue = event.target.value
    // console.log(moodvalue)
    // renderJournalEntries.entryMaker
    renderJournalEntries.filterEntry(moodValue)
    }
)
document.querySelector("#confident").addEventListener("click", event => {
  let moodValue = event.target.value
    // console.log(moodvalue)
    // renderJournalEntries.entryMaker
    renderJournalEntries.filterEntry(moodValue)
    }
)
document.querySelector("#ok").addEventListener("click", event => {
  let moodValue = event.target.value
    // console.log(moodvalue)
    // renderJournalEntries.entryMaker
    renderJournalEntries.filterEntry(moodValue)
    }
)
document.querySelector("#sad").addEventListener("click", event => {
  let moodValue = event.target.value
    // console.log(moodvalue)
    // renderJournalEntries.entryMaker
    renderJournalEntries.filterEntry(moodValue)
    }
)

//Entry listener

document.querySelector("#entryLog").addEventListener("click", event => {
    //delete listener
    if (event.target.id.startsWith("delete__")) {
        const entryToDelete = event.target.id.split("__")[1]
    API.delete(entryToDelete)
    .then(renderJournalEntries.makeDOM)
            }   
    

    // edit listener
    else if (event.target.id.startsWith("edit__")) {
        const entryToEdit = event.target.id.split("__")[1]
        API.getSingleEntry(entryToEdit).then((entryObj => {
            document.querySelector("#entryId").value = entryObj.id
            document.querySelector("#journalDate").value = entryObj.journalDate
            document.querySelector("#conceptsCovered").value = entryObj.conceptsCovered
            document.querySelector("#journalEntry").value = entryObj.journalEntry
            document.querySelector("#moodForTheDay").value = entryObj.moodForTheDay
        }))
        }
    }
)
