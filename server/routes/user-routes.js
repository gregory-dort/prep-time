const express = require('express');
module.exports = (supabase) => {
    const router = express.Router();

    //API endpoint to create a new user
    router.post("/", async (req, res) => {
        
    });

    return router;
}