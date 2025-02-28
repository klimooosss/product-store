import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to accept json data in the req.body

app.use("/api/products", productRoutes); // routing from product.routs.js

app.listen(PORT, () => {
    connectDB();
    console.log("server started at localhost:" + PORT);
});