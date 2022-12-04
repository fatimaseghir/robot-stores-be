const express =  require('express');
const routes = require('./config/routes');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//Add all routes to app
routes(app);

app.listen(port, () => {
    console.log(`nodemongodb app running. Listening on ${port}`);
})