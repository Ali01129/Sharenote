const express = require('express');
const mongoose = require('mongoose');
const shareNotRouter = require('./routes/shareNot');
const path = require("path");
const cors = require('cors');


mongoose.connect("mongodb+srv://ali:alinawaz1@cluster0.pc6svvj.mongodb.net/sharenote?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express();
const port = 5000;
app.use(cors());

// Middleware for parsing JSON request bodies
app.use(express.json());


// making frontend run with nodemon
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// Route for /api/sharenote
app.use('/api/sharenote', shareNotRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
