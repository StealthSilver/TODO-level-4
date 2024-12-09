const express = require("express");
const { createTodo } = require("./types");
const app = express();


app.use(express.json());


app.post("/todo", function (req, res) {

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }


})

app.get("/todo", function (req, res) {

})

app.put("/completed", function (req, res) {

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
