const mysql = require("mysql2");

const pool = mysql
  .createConnection({
    host: "localhost", // HOST NAME
    user: "root", // USER NAME
    database: "sqlecomm", // DATABASE NAME
    password: "root", // DATABASE PASSWORD
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

//   pool.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE Orders (order_id int not null auto_increment,p_name VARCHAR(255) not null,price int not null, product_id int not null, shipping_add VARCHAR(255) not null, primary key(order_id))";
//     pool.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });
module.exports = pool;