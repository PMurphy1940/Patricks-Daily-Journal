import API from "./data.js";
import renderJournalEntries from "./entryList.js";
let moods;
//GET available moods//
// renderJournalEntries.getMoods()
// const availableMoods = API.getMoods()
API.getMoods()
.then(response => moods = response)
.then(() => {renderJournalEntries.moodFilterField(moods)})

//Build initial landing page//
renderJournalEntries.makeDOM()

//NEW ENTRY button listener//
document.querySelector("#createEntry").addEventListener("click", event => {
    renderJournalEntries.entryField(moods)
    document.querySelector(".newButton").classList.toggle("hidden")
})

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
        renderJournalEntries.entryField(moods)
        document.querySelector(".newButton").classList=("newButton hidden")
        const entryToEdit = event.target.id.split("__")[1]
        API.getSingleEntry(entryToEdit).then((entryObj => {
            document.querySelector("#entryId").value = entryObj.id
            document.querySelector("#journalDate").value = entryObj.journalDate
            document.querySelector("#conceptsCovered").value = entryObj.conceptsCovered
            document.querySelector("#journalEntry").value = entryObj.journalEntry
            document.querySelector("#moodForTheDay").value = entryObj.mood.moodName
        }))
        }
    }
)
