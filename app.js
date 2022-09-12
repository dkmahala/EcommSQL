const express= require('express');
const app= express();
require('./config/dbconfig');
const userRoute= require('./user/user.route');
const cors = require('cors');
const productRoute= require('./products/product.routes');
const orderRoute=require('./orders/order.route');
const port= process.env.PORT || 3500;
app.use(express.json());
app.use(cors());
const swaggerUi = require('swagger-ui-express');
const swaggerFile= require('./swagger_output.json')



app.get('/', (req, res)=>{
 res.send('Hello WOrld');
});
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);
app.use('/api/order', orderRoute);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//port 
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});