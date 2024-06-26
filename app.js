const express = require('express')
require('dotenv').config()
const connectDb = require('./config/connection')
const userRouter = require('./Routes/userRouter')


const app = express()
const port = process.env.PORT
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/',userRouter)

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`server is running on ${port}`);
    });
});

