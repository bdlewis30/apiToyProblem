
const express = require('express')
    , app = express()
    , axios = require('axios')
    , port = 8081;

// Hit the following api to get Star Wars characters and return an array with 40 characters. Each page will only return 10 so you will need to find a way to get 40. 

// https://swapi.co/api/people/?page=1

// Recursion example.
app.get('/characters', (req, res) => {
    var page = 1;
    var arr = [];
    (function getCharacters() {
        if(arr.length < 40){
            axios.get(`https://swapi.co/api/people/?page=${page}`).then(res => {
                arr = [...arr, ...res.data.results] //... spread operactor
                page++
                getCharacters()
            })
        }
        else {
            console.log(arr.length)
            res.send(arr)
        }

    })() // IIFE

})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})