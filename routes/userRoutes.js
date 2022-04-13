//load dependencies
const express = require("express");
const userModel = require("../models/user");
const app = express();

//create NEW user
app.post("/user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
//get all users
app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

//update user
app.patch("/user/:id", async (request, response) => {
    try {
      await userModel.findByIdAndUpdate(request.params.id, request.body);
      await userModel.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
  });

//delete user
app.delete("/user/:id", async (request, response) => {
  try {
    const user = await userModel.findByIdAndDelete(request.params.id);

    if (!user) response.status(404).send("No user found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;