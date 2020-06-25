import renderJournalEntries from "./entryList.js";
/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = {
    journalEntry (individualEntry)  {
    return `<legend class="popCard">${individualEntry.conceptsCovered}</legend>
            <div class="single_entry">
                <div class="entry__Content">
                    <div class="date__Concepts">
                                                     
                    <p>${individualEntry.journalDate}</p>
                    </div>
                    <p class="an__Entry">${individualEntry.journalEntry}</p>
                    <p class="an__Entry__Mood">${individualEntry.mood.moodName}</p>
                </div>
                <div class="entries__button__container">                
                    <button type="button" id="edit__${individualEntry.id}">edit</button>
                    <button type="button" id="delete__${individualEntry.id}">Delete</button>
                </div>   
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
                <input class="field" type="date" name="journalDate" id="journalDate">
            </fieldset>
            <fieldset class="entry-point">
                <label for="conceptsCovered">Concepts covered</label>
                <input class="field" type="text" name="Concepts covered" id="conceptsCovered">
            </fieldset>
            <fieldset class="entry-point">
                <label for="journalEntry">Journal Entry</label>
                <textarea class="field" id="journalEntry" name="Journal Entry" rows="4" cols="35"></textarea>
            </fieldset>
            <fieldset class="entry-point">
                <label for="moodForTheDay">Mood for the day</label>
                <select class="field" name="Mood" id="moodForTheDay">`
                + moodSetHTML + `
                </select>

            </fieldset>
            <div id="save_discard">
                <input type="button" value="Record Journal Entry" id="saveButton"></input>
                <input type="button" value="Discard Changes" id="discardButton"></input>
            </div>`
       
    },
    moodFilterFieldsetBuilder (moods) {
        const moodHeaderHTML = `<legend class="popMoods">Filter Journal Entries by Mood</legend>
        <div id="filter__Container">
            <div class="mood__Button__div">
            <input class="md__Button" type="radio" name="mood" value="All" id="all" hidden checked>
            <label for="all">Show All</label>
            </div>
        `
        let buttonSetHTML = ``
        for (let mood of moods) {
            let buttonHTML = `<div class="mood__Button__div">
            <input type="radio" name="mood" value="${mood.id}" id="${mood.moodName}" hidden>
            <label class="md__Button" for="${mood.moodName}">${mood.moodName}</label>           
            </div>`
            buttonSetHTML += buttonHTML
        }
        const moodField = document.querySelector("#sort__By__Mood")
        moodField.innerHTML = moodHeaderHTML + buttonSetHTML + `</div>`
    },
}


export default makeJournalEntryComponent;

