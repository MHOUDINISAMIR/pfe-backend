const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const useRoutes = require('./routes/user')

const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/api/user', useRoutes)

mongoose.connect(
   'mongodb+srv://jack:jack01234@cluster0.jazal.mongodb.net/postApp?retryWrites=true&w=majority'
 ).then((result) => {
     app.listen(5000)
     console.log('mongoDB connected')
 }).catch((err) => {
     console.log(err)
 })
