const express = require('express');
module.exports = (supabase) => {
  const router = express.Router();

  //API endpoint to add a new meal
  router.post("/", async(req, res) => {
    
  });

  //API endpoint to get all meals
  router.get("/", async(req, res) => {

  });

  //API endpoint to delete a meal by ID
  router.delete("/:id", async(req, res) => {

  });

  return router;
};