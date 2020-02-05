const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/weather')


// Define paths for express config
let dirPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Static directory to serve views
app.use(express.static(path.join(dirPath)))

// Setup handlebars engine and views config 
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)


// All different path renders

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About", 
        name: "Connor Boyce"
    })
})
app.get('', (req, res) => {
    res.render('index', {
        title: "Weather", 
        name: "Connor Boyce"
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help", 
        name: "Connor Boyce"
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        res.send({
            error: "Address must be provided"
        })
    } else {
        geocode(req.query.address, (error, response) => {
            if (error){
                return res.send({
                    error: error
                })
            }
            forecast(response.latitude, response.longitude, (error, forecastData) => {
                res.send({
                    forecast: forecastData,
                    address: req.query.address
                })
            })
        })
    }

})

app.get('/products', (req, res) => {

    if(!req.query.search){
        return res.send({
            error: "You must provide a search term"
        })
    } else {
        res.send({
            products: []
        })
    }
    
    
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404 Help", 
        name: "Connor Boyce", 
        errorMessage: "Help page not found"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404", 
        name: "Connor Boyce", 
        errorMessage: "Page not found"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})