const pool = require('../config/dbconfig');

module.exports = {
  createProduct: (data, callBack) => {
    pool.query(
      `insert into Products (p_name, price, description ) 
                values(?,?,?)`,
      [
        data.p_name,     
        data.price,
        data.description
        
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getProductById: (id, callBack) => {
    pool.query(
      `select * from products where productid = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getProducts: callBack => {
    pool.query(
      `select * from products`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateProduct: (data, callBack) => {
    pool.query(
      `update products set p_name=?, price=?,  description=?,  where productid = ?`,
      [
        data.p_name,
        data.price,
        data.description,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteProduct: (data, callBack) => {
    pool.query(
      `delete from products where productid = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};