const express = require('express');
const app = express();
const {PORT} = require('./config/index.js');

const apiRoutes = require('./routes');

app.use('/api',apiRoutes);

app.get('/info',(request,response) => {
    response.send("info");
})

app.listen(PORT,(request,response) => {
    console.log(`Server running on PORT:${PORT}`);
});