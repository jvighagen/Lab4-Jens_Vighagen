
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// http://localhost:3000


app.use(express.static('htmlClient'));



app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});