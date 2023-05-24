import express, { Request, Response } from 'express'
import { router } from './routes/routers'
import { connects } from './config/db'

const port = 4011
var bodyParser = require('body-parser');
var app = express();

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });


// call the database connectivity function
connects()


// configure app.use()
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function (req: any, res: any, next: () => void) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

//call routing
app.use('/', router)


// intialise server
app.listen(port, () => {
    console.log('server is running on ', port)
})
