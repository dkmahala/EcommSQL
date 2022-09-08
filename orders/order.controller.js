const {createOrder, 
    getOrderById,
    getOrders,
    updateOrder,
    deleteOrder
  } = require("./order.service");

module.exports = {
    createOrder: (req, res) => {
      const body = req.body;
      createOrder(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(201).json({
         
          data: results
        });
      });
    },
    getOrderById: (req, res) => {
        const id = req.params.id;
        getOrderById(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record not Found"
            });
          }
          results.password = undefined;
          return res.json({
            success: 1,
            data: results
          });
        });
      },

      getOrders: (req, res) => {
        getOrders((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      updateOrder: (req, res) => {
        const body = req.body;
     
        updateOrder(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: " Order updated successfully"
          });
        });
      },
      deleteOrder: (req, res) => {
        const data = req.body;
        deleteOrder(data, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record Not Found"
            });
          }
          return res.json({
            success: 1,
            message: "Order deleted successfully"
          });
        });
      }
    };