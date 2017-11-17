express = require('express')
mongoose = require('mongoose')
task = require('./api/models/model')
routes = require('./api/routes/routes')
bodyParser = require('body-parser')

app = express()

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Tododb', {useMongoClient: true}) 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

port = process.env.PORT || 3000

routes(app) //register the route
app.listen(port)

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
console.log('RESTful API server started on: ' + port)