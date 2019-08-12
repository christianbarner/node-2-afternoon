const express = require ('express')
const ctrl = require('./controllers/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

const url = '/api/messages'

app.post(url, ctrl.create)
app.get(url, ctrl.read)
app.put(`${url}/:id`, ctrl.update)
app.delete(`${url}/:id`, ctrl.delete)

const port = 3001
app.listen(port, ()=>{
    console.log(`server is lit at port ${port}`)
})