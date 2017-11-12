const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const appRouter = require('./routes');
// const userController = require('./controllers/user-controller');
// const appConfigController = require('./controllers/app-config-controller');

const app = express();
const router = express.Router();
app.use(router);
app.use(cors());
app.use(bodyParser.json());

appRouter.registerRoutes(app);



router.get('/',(req,res)=> {
    res.send('Hello World');
});


app.listen(config.port,()=> {
    console.log(`Express web server is listening on port : ${config.port}`);
});


