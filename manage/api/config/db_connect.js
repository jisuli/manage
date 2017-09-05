// var config = require('./db_config')
// var mysql = require('mysql')
// var pool = mysql.createPool(config.db_sql)

// var query=function(sql ,calback){
// 	pool.getConnection(function(err,connection){
// 		if(err){
// 			calback(err,null,null)
// 		}else{
// 			connection.query(sql,function(qerr , rows , fields){
// 					connection.release()
// 					calback(qerr,rows,fields)
// 			})
// 		}
// 	})
// }
// module.exports = query





var config = require("./db_config")
var mysql = require("mysql")

var pool = mysql.createPool(config.db_sql)

var query = function(sql, calback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            calback(err, null, null)
        } else {
            connection.query(sql, function(qerr, rows, fields) {
                connection.release()
                calback(qerr, rows, fields)
            })
        }

    })
}

module.exports = query