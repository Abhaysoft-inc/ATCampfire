const express = require("express");
const app = express()
require('./config/db.config');
const userRoute = require("./routes/user.routes")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoute)





app.listen(3000, () => console.log("Server is running on port 3000"))
