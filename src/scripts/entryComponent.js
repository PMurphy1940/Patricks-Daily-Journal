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
    }
}

export default makeJournalEntryComponent;