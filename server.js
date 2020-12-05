const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on http://localhost:${PORT}`));