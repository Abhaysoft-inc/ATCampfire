const mongoose = require("mongoose");
const uri = "mongodb://0.0.0.0:27017/atcampfire"
mongoose.connect(uri).then(() => console.log(
    "DB Connected"
)).catch((err) => console.log(err))