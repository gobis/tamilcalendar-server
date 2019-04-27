var express = require('express');
var bodyParser = require('body-parser');
var mongoClient = require('./mongoconn');

var fs = require('fs')

var calendar = require('./calendar')

var app = express()
app.use(bodyParser.json())

const port = 3000;


app.get('/greet', (req,res) => {
    res.write('Hello World');
    res.end();
});


app.get('/getall', (req,res) => {

  calendar.getAll(function(err,result){
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.write(result);
  res.end();
 });
});


app.post('/create', (req,res) => {


});

app.get('/readfromlocal', (req,res) => {

   // read the data from local file system ( sampledata/sample_tamil_cal.txt)
   fs.readFile('sampledata/sample_tamil_cal.txt', function(err,data){

    if(!err) {
     calendar.createMany(data.toString());
    } else {
      console.log('Error in reading file');
    }
   });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


