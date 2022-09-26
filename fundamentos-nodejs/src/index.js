const express = require('express');

const app = express();

app.get("/courses", (request, response) => {
    return response.json(["Curso1","Curso2","Curso3","Curso4",]);
});

app.post("/courses", (request, response) => {
    return response.json(["Curso1","Curso2","Curso3","Curso4",]);
});

app.put("/courses/:id", (request, response) => {
    return response.json(["Curso1","Curso2","Curso3","Curso4",]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso6","Curso7","Curso8","Curso9",]);
});


app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso6", "Curso7", "CursoExcluido"]);
})

app.listen(3333)