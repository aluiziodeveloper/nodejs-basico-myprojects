const express = require('express')
const app = express()

// GET http://localhost:3000/projects?title=Node&owner=Aluizio&page=1

// GET http://localhost:3000/projects?page=1&limit=15

app.get('/projects', function(request, response) {
    const {title, owner, page} = request.query
    console.log(title, owner, page)

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ])
})

app.post('/projects', function(request, response) {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.put('/projects/:id/:name', function(request, response) {
    const {id, name} = request.params
    console.log(id, name)

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.delete('/projects/:id', function(request, response) {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ])
})

app.listen(3000, () => {
    console.log('Server started on port 3000! 🏆')
})
