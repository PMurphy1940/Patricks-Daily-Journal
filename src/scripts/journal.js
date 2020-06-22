import API from "./data.js";
import renderJournalEntries from "./entryList.js";

API.getJournalEntries().then(renderJournalEntries.entryMaker)


//save button listener
document.querySelector("#saveButton").addEventListener("click", event => {
    renderJournalEntries.makeEntryObject()
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
    if (event.target.id.startsWith("delete__")) {
        const entryToDelete = event.target.id.split("__")[1]
    API.delete(entryToDelete)
    .then((API.getJournalEntries().then((renderJournalEntries.entryMaker))))
        }
    }
)
