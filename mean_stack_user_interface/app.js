const express = require('express');
cors = require('cors');
const apiRoutes = require('./server/routes/api.routes');


//environment  set 
require('dotenv').config();

//database setting import
require('./server/config/db');

const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use('/api', apiRoutes);

const port = process.env.PORT;
app.listen(port,() => {
    console.log(`server is running at http://localhost:${port}`);
});
