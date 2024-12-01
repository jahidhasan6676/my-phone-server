const express = require("express");
const cors = require("cors")
const phones = require('./phones.json');
const app = express();


app.use(cors());

const port = 5000;

app.get("/", (req, res) =>{
    res.send("my all phones information  coming soon")
});


app.get("/phones", (req, res) =>{
    res.send(phones)
});

app.get('/phones/:id', (req, res) =>{
    const id = req.params.id;
    console.log("i need id:", id);
    const phone = phones.find(ph => ph.id === parseInt(id));
    res.send(phone)
})

app.listen(port, ()=>{
    console.log(`my phone server port is: ${port}`)
})