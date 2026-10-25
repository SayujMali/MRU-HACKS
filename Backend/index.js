// import the neccessary Node modules
const express = require('express')
const { MongoClient, ObjectId } = require("mongodb");
const cors = require('cors')

const app = express()
const port = 9000

const mongoURI = "mongodb://localhost:27017";
const databaseName = 'hospitalsAndClinics'
let db;
let collection;

MongoClient.connect(mongoURI)
    .then(client => {
        db = client.db(databaseName);
        collection = db.collection(databaseName)
        console.log("connected to MongoDB");
    })
    .catch(err => console.error("connection error:", err));

app.use(cors())
app.use(express.json())

app.get('/hospitalsAndClinics', async(req,res)=>{
    const result = await collection.find().toArray()
    res.json(result)
})
//create a new entry in the database
app.post('/hospitalsAndClinics', async(req, res) => {
    const result = await collection.insertOne(req.body)
    res.json(result)
})

app.put('/hospitalsAndClinics', async(req, res) => {
  const result = await collection.updateOne({_id: new ObjectId(req.query.id)}, {$set: req.body})
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
