const express = require('express');
const routes = require('./routes/routes');
const path = require('path')
const hbs = require('express-handlebars');
const app = express();
const morgan = require('morgan')
const methodOverride = require('method-override')

//connect db
require('./database/dbConfig');

//view configuration
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs',hbs({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'layouts'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs');




// middlewares

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));
//rputes
app.use(routes);



//server
app.listen(3000, () => console.log("Server running"))