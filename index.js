const express = require('express')
const app = express()
const port = process.env.port || 3000

//JSON response to root endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Ok' })
})

app.listen(port, () => {
  console.log(`Apps started on port http://localhost:${port}, enjoy!`)
} )