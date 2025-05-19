const { Pool } = require('pg');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT

});

app.get('/', (req, res) => {
    res.send('Servidor rodando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});