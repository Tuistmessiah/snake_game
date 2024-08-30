const express = require('express');
const cors = require('cors');

const scoresRouter = require('./routes/scores');

// Express app
const app = express();

// CORS
app.use(cors());

app.use(express.json());

app.use('/scores', scoresRouter);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Scores server running on http://localhost:${PORT}`);
});
