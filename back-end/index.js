const express = require('express');
const routes = require('./routes');
const corsMiddleware = express('./src/Middleware/cors');
const cors = require('cors');

const app = express();
const port = 3333;

app.use(cors());
app.use(corsMiddleware);
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
