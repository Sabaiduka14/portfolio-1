const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

connectToDb((err) => {
  if (!err) {
    db = getDb();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } else {
    console.error("Failed to connect to the emails:", err);
  }
});

app.post("/email", (req, res) => {
    const newEmail = req.body;
  
    db.collection("email")
      .insertOne(newEmail)
      .then((result) => {
        res.status(201).json(result.ops[0]);
      })
      .catch((err) => {
        console.error("Error creating post:", err);
        res.status(500).json({ error: "Error creating post" });
      });
});
  
