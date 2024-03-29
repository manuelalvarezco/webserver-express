const express = require('express')
const app = express();

var hbs = require('hbs');

const port = process.env.PORT || 3000;



app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// Helpes
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'Manuel'
    });

})

app.get('/about', (req, res) => {


    res.render('about', {


    });

})

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
})