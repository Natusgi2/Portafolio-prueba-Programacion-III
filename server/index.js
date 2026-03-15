const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Para procesar datos JSON en peticiones POST

// Ruta de prueba inicial
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: "¡Hola desde el servidor Node.js Miguel!" });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});