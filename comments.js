// Creat web server
const express = require('express');
const app = express();

app.use(express.json());

// Create comments array
const comments = [
    { username: 'tommmy', comment: 'hello' },