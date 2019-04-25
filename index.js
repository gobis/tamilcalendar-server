var express = require('express')
var bodyParser = require('body-parser')
var mongoClient = require('./mongoconn')

var app = express()
app.use(bodyParser.json())

const port = 3000


app.get('/greet', (req,res) => {
    res.write('Hello World');
    res.end();
});


app.get('/getall', (req,res) => {
  var client =  mongoClient.getClient();
  var dbo = client.db('tamilcaldb');
  var collection = dbo.collection('myCollection');
  collection.find().toArray(function(err, items) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.write(JSON.stringify(items));
        res.end();
    });
});


app.post('/create', (req,res) => {

  

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

