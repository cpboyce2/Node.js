const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

// Create add command 

yargs.command({
    command: 'add',
    describe: 'Add new quote',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type : 'string'
        }, 
        body: {
            describe: 'Note body', 
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove commmand

yargs.command({
    command: 'remove',
    describe: 'Removing the note',
    builder: {
        title: {
            describe: "Note title", 
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command 
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function() {
        notes.listNotes()
    }
})

//Creating read command 

yargs.command({
    command: 'read',
    describe: 'reading the note',
    handler: function() {
        console.log('reading the note')
    }
})

yargs.parse()
