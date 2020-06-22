import API from "./data.js";
import renderJournalEntries from "./entryList.js";

API.getJournalEntries().then(renderJournalEntries.entryMaker)

document.querySelector("#saveButton").addEventListener("click", event => {
    renderJournalEntries.makeEntryObject()
})
document.querySelector("#happy").addEventListener("click", event => {
  let moodValue = event.target.value
    // console.log(moodvalue)
    // renderJournalEntries.entryMaker
    renderJournalEntries.filterEntry(moodValue)
})
document.querySelector("#confident").addEventListener("click", event => {
  let moodValue = event.target.value
    // console.log(moodvalue)
    // renderJournalEntries.entryMaker
    renderJournalEntries.filterEntry(moodValue)
})
document.querySelector("#ok").addEventListener("click", event => {
  let moodValue = event.target.value
    // console.log(moodvalue)
    // renderJournalEntries.entryMaker
    renderJournalEntries.filterEntry(moodValue)
})
document.querySelector("#sad").addEventListener("click", event => {
  let moodValue = event.target.value
    // console.log(moodvalue)
    // renderJournalEntries.entryMaker
    renderJournalEntries.filterEntry(moodValue)
})
