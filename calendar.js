
var mongoClient = require('./mongoconn')

var createSingle = function(data){
    var db =  mongoClient.getClient();
    var collection = db.collection(mongoClient.collectionName);
    var dataJson = JSON.parse(data);
    collection.insert(dataJson);
}

var createMany = function(data){
    var db =  mongoClient.getClient();
    var collection = db.collection(mongoClient.collectionName);
    var dataArray = JSON.parse(data);
    dataArray.forEach(element => {
       collection.insert(element);
    }); 
};

var getAll = function(callback){
    var db =  mongoClient.getClient();
    var collection = db.collection(mongoClient.collectionName);
    collection.find().toArray(function(err, items) {
      if( err ) callback(err)
      else callback(null, JSON.stringify(items));
   });
 }


 var get = function(req,callback){
   var db =  mongoClient.getClient();
   var collection = db.collection(mongoClient.collectionName);

   var date = req.query.date; 
  
   var queryObject = { "date":date };

   collection.find(queryObject).toArray(function(err, items) {
     if( err ) callback(err)
     else callback(null, JSON.stringify(items));
  });
}

var getSingle = function(query){

}

var getMany = function(query){


}


var update = function(query){

}


var deleteDate = function(req,callback){
   var db =  mongoClient.getClient();
   var collection = db.collection(mongoClient.collectionName);

   var date = req.query.date; 
  
   var queryObject = { "date":date };

   collection.deleteMany(queryObject,function(err, result) {
     if( err ) callback(err)
     else callback(null, JSON.stringify(items));
  });
}


module.exports = {
   createMany : createMany,
   getAll : getAll,
   get : get ,
   delete : deleteDate
}
