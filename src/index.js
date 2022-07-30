const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(express.json())

// GET http://localhost:3000/projects?title=Node&owner=Aluizio&page=1
// GET http://localhost:3000/projects?page=1&limit=15

const projects = []

app.get('/projects', function(request, response) {
    return response.json(projects)
})

app.post('/projects', function(request, response) {
    const {name, owner} = request.body
    const project = {
        id: uuidv4(),
        name,
        owner
    }
    projects.push(project)

    return response.status(201).json(project)
})

app.put('/projects/:id', function(request, response) {
    const {id} = request.params
    const {name, owner} = request.body

    console.log(id, name, owner)

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
