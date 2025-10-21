const express = require('express');

const calculaMatriz = require('./calculaMatriz')

const app = express();

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req, res) => {
    const { input1, input2, input3,input4 } = req.body;

    var info = calculaMatriz([input1, input2, input3, input4])

    if(info[0])
    {
        resposta = `<p>det: ${info[1]}</p>
            <p>matriz inversa:<br>
            [${info[2]} ${info[3]}]<br>
            [${info[4]} ${info[5]}]</p>`
    }
    else{
        resposta = `<p>det: ${det[1]} <br> não há matriz inversa</p>`;
    }

    res.send(resposta);
});



var server = app.listen( port || process.env.PORT , () =>{
    console.log(`Servidor rodando em ${process.env.PORT || port}`)
}); 