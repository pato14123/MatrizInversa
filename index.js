const express = require('express');

const app = express();

const port = 3000;
app.use(express.json()); //uso de parse json
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle POST requests to the /submit-form endpoint
app.post('/submit-form', (req, res) => {
    // You can now process this data (e.g., save to a database, send an email)
    res.send('Form submitted successfully!');
});

var server = app.listen( port || process.env.PORT , () =>{
    console.log(`Servidor rodando em ${process.env.PORT || port}`)
}); 