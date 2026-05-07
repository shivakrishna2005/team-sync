const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

let projects = [];

let tasks = [];

app.get("/", (req,res)=>{
    res.send("TeamSync Server Running");
});

app.post("/projects",(req,res)=>{

    const project = {
        id: Date.now(),
        name: req.body.name
    };

    projects.push(project);

    res.json(project);
});

app.get("/projects",(req,res)=>{
    res.json(projects);
});

app.post("/tasks",(req,res)=>{

    const task = {
        id: Date.now(),
        title: req.body.title,
        status: req.body.status
    };

    tasks.push(task);

    res.json(task);
});

app.get("/tasks",(req,res)=>{
    res.json(tasks);
});

app.delete("/tasks/:id",(req,res)=>{

    tasks = tasks.filter(
        (task)=>task.id != req.params.id
    );

    res.json({
        message:"Task Deleted"
    });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});