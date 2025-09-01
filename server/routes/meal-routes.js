const express = require('express');
module.exports = (supabase) => {
  const router = express.Router();

  //API endpoint to add a new meal
  router.post("/add-meal", async(req, res) => {
    
  });

  //API endpoint to delete a meal by ID
  router.delete("/delete-meal", async(req, res) => {

  });

  //API endpoint to get all meals
  router.get("/all-meals", async(req, res) => {

  });

  return router;
};