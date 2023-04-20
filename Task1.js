import express from 'express';

const app = express();

const students = [
    "Yasmina",
    "Hala",
    "Youmna",
    "Habiba",
    "Fedaa"
]

const studentslist = (request, response) => {

    let output = '<ul>';

    for (let i = 0; i < students.length; i++) {

         output += "<li>"+ students[i] + "</li>";
         
    }

    response.send(output);
};

app.get('/students', studentslist)


app.listen(5000);