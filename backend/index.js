const express = require("express");
const app = express();

app.use('/', (req, res) => {
    res.send("Hello ABhay")
})


const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is Listening on ${PORT}`);
});