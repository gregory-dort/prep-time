const express = require('express');
module.exports = (supabase) => {
    const router = express.Router();

    // API endpoint to create a new user
    router.post("/signup", async (req, res) => {
        const { email, username, password } = req.body;

        // Validates that all required fields are present
        if (!email || !username || !password) {
            return res.status(400).json({ error: "Missing required field: username, email, or password" });
        }

        //Checks if username contains only numbers or empty spaces
        if (username.trim() === '' || /^\d+$/.test(username)) {
        return res.status(400).json({ error: "Username cannot be blank or contain only numbers." });
        }

        // Checks if password equals 8 characters, has an uppercase & lowercase letter, and special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d]).{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ error: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one symbol." });
        }

        try {
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email: email,
                password: password
            })

            // Returns authError if issue with signUp
            if (authError) {
                console.error('Supabase Auth Error: ', authError);
                return res.status(400).json({ error: authError.message });
            }

            const userId = authData.user.id;
            const { data: userData, error: userError } = await supabase
            .from('users')
            .insert({ id: userId, email: email, username: username});

            // Returns errors with inserting data into users table
            if (userError) {
                console.error('Supabase User Insert Error: ', userError);
                return res.status(500).json({ error: "Error creating user profile"});
            }

            return res.status(201).json({ 
                message: "User account and profile created successfully",
                user: { id: userId, username: username }
             });

        } catch (error) {
            res.status(500).json({ error: "Unexpected error occurred" });
        }
    });

    // API endpoint to sign in
    router.post("/signin", async (req, res) => {
        const { username, password } = req.body;
    });
    return router;
}