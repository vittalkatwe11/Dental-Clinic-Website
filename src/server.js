const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

const mongoURI = 'mongodb+srv://vittalkatwe:8431465059@cautious.rh2qklo.mongodb.net/?retryWrites=true&w=majority&appName=cautious';

MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    
    const db = client.db('SmileAgain');
    const collection = db.collection('form');

    app.post('/submit-form', (req, res) => {
      const formData = req.body;

      collection.insertOne(formData)
        .then(result => {
          console.log('Form data inserted successfully:', result);
          res.status(201).send('Form submitted successfully');
        })
        .catch(error => {
          console.error('Error inserting form data:', error);
          res.status(500).send('Internal server error');
        });
    });
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
