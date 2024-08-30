const express = require('express');
const router = express.Router();
const db = require('../db/connection'); // use this for your connection, remember: db.query(...)

// Get all scores
router.get('/', async (req, res) => {
    res.status(200).json({ message: "This endpoint doesn nothing yet :)!" });
});

// ... whatever more you need from the game frontend

module.exports = router;
