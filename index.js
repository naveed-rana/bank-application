const express = require('express');
const app = express();

app.use(express.static('./public'));

const PORT = process.env.PORT || 8088;
app.listen(PORT);