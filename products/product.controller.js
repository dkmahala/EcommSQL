const {createProduct, 
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct
  } = require("./product.service");

module.exports = {
    createProduct: (req, res) => {
      const body = req.body;
      createProduct(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        console.log(results);
        return res.status(201).json({
         
          data: results
        });
      });
    },
    getProductById: (req, res) => {
        const id = req.params.id;
        getProductById(id, (err, results) => {
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

      getProducts: (req, res) => {
        getProducts((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            data: results
          });
        });
      },
      updateProduct: (req, res) => {
        const body = req.body;
     
        updateProduct(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
      },
      deleteProduct: (req, res) => {
        const data = req.body;
        deleteProduct(data, (err, results) => {
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
            message: "user deleted successfully"
          });
        });
      }
    };