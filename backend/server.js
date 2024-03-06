const express = require('express');
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());  //to accept JSON data from the frontend

app.get("/", (req, res) => {
    res.send("API is running successfully");
});

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.bold));