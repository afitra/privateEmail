const express = require('express')
// const productRoute = require('./routes/product')
const userRoute = require('./routes/indexRoutes')


require('dotenv').config();
const app = express()
const port = process.env.port
// app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extends: false
}))
app.use('/private/api/', userRoute)
 

console.log(` live on port ${port}  ************'''`)



app.listen(port)