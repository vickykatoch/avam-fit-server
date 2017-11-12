const userController = require('./controllers/user-controller');
const appConfigController = require('./controllers/app-config-controller');
const userPrefsController = require('./controllers/user-pref.controller');
const workspaceController = require('./controllers/user-ws.controller');


class ApplicationRouter {
    
    registerRoutes(app) {
        app.use('/api/users',userController);
        app.use('/api/appConfigs',appConfigController);
        app.use('/api/userprefs',userPrefsController);
        app.use('/api/workspaces',workspaceController);
    }

}

module.exports = new ApplicationRouter();