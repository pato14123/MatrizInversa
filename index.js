const express = require('express');

const app = express();

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req, res) => {
    const { input1, input2, input3,input4 } = req.body;

    var det = (input1 * input4) - (input2 * input3);
    var resposta;
    if(det != 0){
        var input1Inv = input4;
        var input4Inv = input1;
        var input2Inv = -input2;
        var input3Inv = -input3;
        resposta = `<p>det: ${det}</p>
                    <p>matriz inversa:<br>
                    [${input1Inv} ${input2Inv}]<br>
                    [${input3Inv} ${input4Inv}]</p>`
    }
    else{
        resposta = `<p>det: ${det} <br> não há matriz inversa</p>`;
    }
    res.send(resposta);
});

var server = app.listen( port || process.env.PORT , () =>{
    console.log(`Servidor rodando em ${process.env.PORT || port}`)
}); 