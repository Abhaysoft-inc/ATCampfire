const express = require("express");
const app = express()
const dotenv = require("dotenv")
require('./config/db.config');
const userRoute = require("./routes/user.routes");
const podcastRoute = require("./routes/podcast.routes")
dotenv.config()

const cors = require('cors')

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/auth', userRoute);
app.use('/podcast', podcastRoute)





app.listen(3000, () => console.log("Server is running on port 3000"))
