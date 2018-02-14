
const express = require('express')
, app = express()
, axios = require('axios')
, port = 8081;

// Hit the following api to get Star Wars characters and return an array with 40 characters. Each page will only return 10 so you will need to find a way to get 40. 

// https://swapi.co/api/people/?page=1

app.get('/characters', (req, res) => {


    
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    })