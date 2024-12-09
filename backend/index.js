const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db")
const app = express();


app.use(express.json());


app.post("/todo", async function (req, res) {

    // validation
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }

    // creating the todo in db

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })


})

app.get("/todo", async function (req, res) {

    // get the todos from the db
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function (req, res) {

    // validation
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }


    // mark completed in db
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })


})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
