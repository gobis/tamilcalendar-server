
var MongoClient = require('mongodb').MongoClient;


var mongodbClient ;

var getStoreClient = function(){
// Connect to the db if connection is not established

if(mongodbClient == null || mongodbClient == 'undefined') {
MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
    mongodbClient = db ;
   });
}
 return mongodbClient;
}


module.exports = {
    getClient : getStoreClient
}