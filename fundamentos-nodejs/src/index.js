const express = require('express');

const app = express();
app.use(express.json())

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);
    return response.json(["Curso1","Curso2","Curso3","Curso4",]);
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json(["Curso1","Curso2","Curso3","Curso4",]);
});

app.put("/courses/:id", (request, response) => {
    const {id} = request.params;
    console.log(id);
    return response.json(["Curso1","Curso2","Curso3","Curso4",]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso6","Curso7","Curso8","Curso9",]);
});


app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso6", "Curso7", "CursoExcluido"]);
})

app.listen(3333)