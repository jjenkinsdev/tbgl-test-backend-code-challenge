//load dependencies
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes.js");

//initilize app
const app = express();

//connection string in souce code
mongoose.connect(
  "mongodb+srv://fignuts:test1234@cluster0.gwlmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//dependancy injection?
app.use(express.json());
app.use(userRouter);

app.listen(3000, () => {
  // STDout logging  
  console.log("Server is running...");
});
