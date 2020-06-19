import API from "./data.js";
import renderJournalEntries from "./entryList.js";

API.getJournalEntries().then(renderJournalEntries.entryMaker)

document.querySelector("#saveButton").addEventListener("click", event => {
    renderJournalEntries.makeEntryObject()
})
