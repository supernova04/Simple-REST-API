const express = require('express')
const app = express()
const port = 8080 //apps running at port 9000

//JSON response to root endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Ok' })
})

app.listen(port, () => {
  console.log(`Apps started on port http://localhost:${port}, enjoy!`)
} )