const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8081
app.use(cors())

app.get('/', (req, res) => {
    res.send({
        message: "hello"
    })
})
  
const routes = require('./routes/user.routes.js');
routes(app);


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
  })