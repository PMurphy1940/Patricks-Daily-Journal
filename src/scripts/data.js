// Fetch the entries from the database
const url = "http://localhost:3000/"

const API = {
    getJournalEntries () {
        return fetch(`${url}entries`)
            .then(response => response.json())
    },
    getSingleEntry (id) {
        return fetch(`${url}entries/${id}`)
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
    },
    updateEntry (id, entry) {
        return fetch(`${url}entries/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(entry)
            });
    },
    delete (entry) {
        return fetch(`${url}entries/${entry}`, {
            method: 'DELETE'
            })
            .then(response => response.json())
    }
}

export default API;