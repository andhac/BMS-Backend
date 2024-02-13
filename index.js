const express = require("express");
const app = express();
var cors = require("cors");
const userModel = require("./database/user");
let moviesModel = require("./database/movie");
let connectDB = require("./connection");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Server is working" });
});

/*
Route: /mov
Description: To get all movies
Access: Public
Parameter: NONE
Method: GET
*/

app.get("/mov", async (req, res) => {
  const getAllMovies = await moviesModel.find();
  return res.json(getAllMovies);
});

/*
Route: /mov/:_id
Description: To get a movie by id
Access: Public
Parameter: NONE
Method: GET
*/

app.get("/mov/:_id", async (req, res) => {
  const { _id } = req.params;
  const getSpecificMovie = await moviesModel.findOne({ _id: _id });
  if (getSpecificMovie == null) {
    return res.json({ Error: `Movie Not Found with this ID ${_id}` });
  }
  return res.json(getSpecificMovie);
});

/*
Route: /mov
Description: To add a new movie
Access: Public
Parameter: NONE
Method: POST
*/

app.post("/mov", async (req, res) => {
  const addNewMovie = await moviesModel.create(req.body);
  return res.json({
    movie: addNewMovie,
    console: `Movie was added`,
  });
});

/*
Route: /user-register
Description: To register a new user
Access: Public
Parameter: NONE
Method: POST
*/

app.post("/user-register", async (req, res) => {
  const addNewUser = await userModel.create(req.body);
  return res.json({ userAdded: addNewUser, message: "New User Added" });
});

app.listen(4000, () => {
  connectDB
    .then(() => {
      console.log("Server is running 🚀");
    })
    .catch((err) => {
      console.log("Server is running, but database connection failed...");
    });
});
