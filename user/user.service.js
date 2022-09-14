const mysql = require("mysql2");

const pool = mysql
  .createConnection({
    host: "db-mysql-blr1-36776-do-user-12395789-0.b.db.ondigitalocean.com", // HOST NAME
    user: "doadmin", // USER NAME
    database: "defaultdb", // DATABASE NAME
    password: "AVNS_MIELDmaRPleSxSBlVu5", // DATABASE PASSWORD
    port: 25060,
    
    
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });


  pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected to user table!");
  });

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO Users (name, email, password ) 
                values(?,?,?)`,
      [data.email, data.name, data.password],
      (error, results, fields) => {
        if (error) {
          callBack(error);
          console.log(error);
        }
        return callBack( null,results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack( results);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select * from users where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack( results);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select * from users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack( results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update users set name=?, email=?,  password=?,  where id = ?`,
      [
        data.name,
        
      
        data.email,
        data.password,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from users where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};