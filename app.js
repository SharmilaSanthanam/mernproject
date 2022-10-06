const dotenv = require("dotenv")
const express = require('express')
const connection = require('./database.js')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const paymentRoute = require("./routes/paymentRouter")
const path = require("path");

const app = express();

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(fileUpload({
  useTempFiles: true
}))

// Routes
app.get("/", (req, res) =>
  res.send(`Server Running`)
);
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))
app.use('/api', require('./routes/paymentRouter'))


app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
