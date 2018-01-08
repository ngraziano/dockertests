const express = require('express');
const url = require('url');
var rp = require('request-promise-native');
require('dotenv').config();
const app = express();

var randId = Math.random();
var volatileNbCall = 0;

function getVolatile() {
    return volatileNbCall++;
}

const statOptions = {
    uri: url.resolve(process.env.BACKURL, "stat"),
    json: true,
}

app.get('/', async (req, res, next) => {
    ;
    try {
        const stat = await rp(statOptions);
        var response = 'ID : '+ randId + '\n';
        response += 'Volatile call : '+ getVolatile() + '\n';
        response += 'Saved call : '+ stat.nbCall + '\n';

        res.set('Content-Type', 'text/plain');
        res.send(response );
    }
    catch(e) {
        next(e);
    }

    
} );

app.get('/vol', (req, res) => {
    res.json ({nbCall:getVolatile()});
});

app.listen(3000, () => console.log('Example app listening on port 3000'));
