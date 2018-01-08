const express = require('express');
const fs = require('fs-extra')
require('dotenv').config()

const app = express();



app.get('/stat', async(req, res) => {
    var actualVal;
    try {
        actualVal = await fs.readJSON(process.env.STOREDB);
    } catch (e) {
        actualVal = {
            nbCall: 0
        };
    }

    res.json(actualVal);
    actualVal.nbCall++;

    await fs.writeJSON(process.env.STOREDB, actualVal);
});

app.listen(3001, () => console.log('back listening on port 3001'));