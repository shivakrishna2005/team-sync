const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());


// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));


// Sample in-memory tasks
let tasks = [
    {
        id: 1,
        title: "Complete TeamSync Project"
    }
];


// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});


// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});


// Add task
app.post("/tasks", (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.json(newTask);
});


// Delete task
app.delete("/tasks/:id", (req, res) => {

    tasks = tasks.filter(
        (task) => task.id != req.params.id
    );

    res.json({
        message: "Task Deleted"
    });
});


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});