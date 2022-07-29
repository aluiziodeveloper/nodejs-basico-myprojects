const express = require('express')
const app = express()

app.get('/projects', function(request, response) {
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

app.put('/projects/:id', function(request, response) {
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
