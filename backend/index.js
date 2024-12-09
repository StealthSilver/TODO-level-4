const express = require("express");
const app = express();


app.use(express.json());


app.post("/todo", function (req, res) {

})

app.get("/todo", function (req, res) {

})

app.put("/completed", function (req, res) {

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
