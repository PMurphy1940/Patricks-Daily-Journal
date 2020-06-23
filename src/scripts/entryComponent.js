import renderJournalEntries from "./entryList.js";
/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = {
    journalEntry (individualEntry)  {
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

    entryFieldsetBuilder () {
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
                <textarea id="journalEntry" name="Journal Entry" rows="2" cols="25">
                </textarea>
            </fieldset>
            <fieldset class="entry-point">
                <label for="moodForTheDay">Mood for the day</label>
                <select name="Mood for the day" id="moodForTheDay">
                    <option value="Happy">Happy</option>
                    <option value="Confident">Confident</option>
                    <option value="Ok">Ok</option>
                    <option value="Sad">Sad</option>
                </select>

            </fieldset>
            <input type="button" value="Record Journal Entry" id="saveButton"></input>
            <input type="button" value="Discard Changes" id="discardButton"></input>`
       
    }
}


export default makeJournalEntryComponent;