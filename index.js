const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer();
require("dotenv").config();

const app = express();

app.use(cors());
app.use("/public", express.static(__dirname + "/public"));

//GET API to serve an html file
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// POST request to /api/fileanalyse to receive the file name, type, and size in bytes within the JSON response.
app.route("/api/fileanalyse").post(upload.single("upfile"), (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// App listening via port 3000
const port = process.env.PORT || 3000;
app.listen(port, function (error) {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log("Your app is listening on port " + port);
  }
});
