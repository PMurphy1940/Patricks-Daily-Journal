// Fetch the entries from the database
const url = "http://localhost:3000/"

const API = {
    getJournalEntries () {
        return fetch(`${url}entries`)
            .then(response => response.json())
    },
    postSingleEntry (entry) {
        return fetch(`${url}entries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(entry)
            });
    }
}

export default API;