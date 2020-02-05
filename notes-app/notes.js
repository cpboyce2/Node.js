const fs = require('fs')

const getNotes = function() {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) =>{
        return note.title === title
    })
    debugger
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title, 
            body: body
        })
    } else {
        console.log("Note title already in your list")
    }
    

    saveNotes(notes)
}

const removeNote = (title) => {
    console.log(title)
    const notes = loadNotes()
    const newNote = notes.filter((note) => {
        return note.title !== title
    })    
    console.log(newNote)
    saveNotes(newNote)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
    
}

const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    })
}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote, 
    removeNote: removeNote,
    listNotes: listNotes
}