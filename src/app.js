const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const requests = require('requests');
const port = 80;

// public static path
// console.log(`Path is: ${path.join(__dirname, "../public")}`);
const StaticPath = path.join(__dirname, "../public");
const TemplatePath = path.join(__dirname, './templates/views');
const partialPath = path.join(__dirname,'/templates/partials');

app.set('view engine', 'hbs');
app.set('views', TemplatePath);
hbs.registerPartials(partialPath);

app.use(express.static(StaticPath))

// Routing
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/weather', (req, res) => {
    res.render('weather');
});
app.get('*', (req, res) => {
    res.render('404error',{
        errorMsg: 'Oops! Page not found'
    });
});

app.listen(port,()=>{
    console.log('listening on port 80');
})