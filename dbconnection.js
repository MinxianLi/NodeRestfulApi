var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'test',
database:'demo'


});
module.exports=connection;