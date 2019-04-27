
var mongojs = require('mongojs');

var mongodbClient ;
var collectionName = 'calendar';
var dbName = 'tamilcaldb';
var hostName = 'localhost';
var portNumber = '27017';

var getStoreClient = function(){

 if(mongodbClient == null || mongodbClient == 'undefined') {
    var mongodbClient =  mongojs(hostName + ':' + portNumber + '/' + dbName);
  }

 return mongodbClient;
}




module.exports = {
    getClient : getStoreClient,
    collectionName : collectionName 
}