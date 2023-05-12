const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 5000;


async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongodb');
        console.log(`mongodb server is connected now`)
    } catch (error) {
        console.log(`mongodb connected losed`, error)
    }
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

bootstrap()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server app is listening on port ${port}`)
})

