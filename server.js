express = require('express')
mongoose = require('mongoose')
task = require('./api/models/model') //created model loading here
routes = require('./api/routes/routes') //importing route
bodyParser = require('body-parser')

app = express()

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Tododb') 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    // res.status(404).send({url: req.originalUrl + ' not found'})
    console.log(req.url)
    next()
})

port = process.env.PORT || 3000

routes(app) //register the route
app.listen(port)

// error handler
// app.use(function(err, req, res) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
// //   res.locals.error = req.app.get('env') === 'development' ? err : {}
//  // render the error page
//   res.status(err.status || 500)
//   res.render('error')
// })
console.log('RESTful API server started on: ' + port)