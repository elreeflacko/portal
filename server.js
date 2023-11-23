const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS engine
app.set('view engine', 'hbs');

//Pagina Principal
app.get('/', (req, res) => {
    res.render('portal', {
        empresa: 'Julaje',
        pagina: 'principal',
        nombre: 'Jorge Osorio'
    });
});

//Atencion Prehospitalaria
app.get('/prehospitalaria', (req, res) => {
    res.render('prehospitalaria', {
        empresa: 'Julaje',
        pagina: 'atención prehospitalaria'
    });
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});