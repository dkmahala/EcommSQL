const pool = require('../config/dbconfig');

module.exports = {
  createOrder: (data, callBack) => {
    pool.query(
      `insert into products(p_name, price, description ) 
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
  getOrderById: (id, callBack) => {
    pool.query(
      `select * from products where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getOrders: callBack => {
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
  updateOrder: (data, callBack) => {
    pool.query(
      `update products set p_name=?, price=?,  description=?,  where id = ?`,
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
  deleteOrder: (data, callBack) => {
    pool.query(
      `delete from products where id = ?`,
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