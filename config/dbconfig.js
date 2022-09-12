const mysql = require("mysql2");

const pool = mysql
  .createConnection({
    host: "db-mysql-blr1-36776-do-user-12395789-0.b.db.ondigitalocean.com", // HOST NAME
    user: "doadmin", // USER NAME
    database: "defaultdb", // DATABASE NAME
    password: "AVNS_BVLVcKwefdITEHGu9xn", // DATABASE PASSWORD
    port: 25060
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