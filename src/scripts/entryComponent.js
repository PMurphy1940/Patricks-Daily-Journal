import renderJournalEntries from "./entryList.js";
/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = {
    journalEntry (individualEntry)  {
        // let mood = moods.find(singleMood => {
        //     (individualEntry.moodForTheDay === singleMood.id)
        //     return singleMood.moodName
        // })
    return `<div class="single entry">
                <ul>
                    <li>${individualEntry.journalDate}</li>
                    <li>${individualEntry.conceptsCovered}</li>
                    <li>${individualEntry.journalEntry}</li>
                    <li>${individualEntry.moodForTheDay}</li>
                </ul>
                <button type="button" id="edit__${individualEntry.id}">edit</button>
                <button type="button" id="delete__${individualEntry.id}">Delete</button>   
            </div>`
    },

    entryFieldsetBuilder (moods) {
        let moodSetHTML = ``
        for (let mood of moods) {
            let setHTML = `<option value="${mood.id}">${mood.moodName}</option>`
            moodSetHTML += setHTML
        }
    const entryField = document.querySelector("#dataForm")
        entryField.innerHTML= `
        <input type="hidden" id="entryId" value=""/>
            <fieldset class="entry-point">
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
            <fieldset class="entry-point">
                <label for="conceptsCovered">Concepts covered</label>
                <input type="text" name="Concepts covered" id="conceptsCovered">
            </fieldset>
            <fieldset class="entry-point">
                <label for="journalEntry">Journal Entry</label>
                <textarea id="journalEntry" name="Journal Entry" rows="4" cols="35"></textarea>
            </fieldset>
            <fieldset class="entry-point">
                <label for="moodForTheDay">Mood for the day</label>
                <select name="Mood for the day" id="moodForTheDay">`
                + moodSetHTML + `
                </select>

            </fieldset>
            <input type="button" value="Record Journal Entry" id="saveButton"></input>
            <input type="button" value="Discard Changes" id="discardButton"></input>`
       
    },
    moodFilterFieldsetBuilder (moods) {
        const moodHeaderHTML = `<legend>Filter Journal Entries by Mood</legend>
        <label for="all">Show All</label>
        <input type="radio" name="mood" value="All" id="all">`
        let buttonSetHTML = ``
        for (let mood of moods) {
            let buttonHTML = `<label for="${mood.moodName}">${mood.moodName}</label>
            <input type="radio" name="mood" value="${mood.moodName}" id="${mood.moodName}">`
            buttonSetHTML += buttonHTML
        }
        const moodField = document.querySelector("#sort__By__Mood")
        moodField.innerHTML = moodHeaderHTML + buttonSetHTML
    }
}


export default makeJournalEntryComponent;

