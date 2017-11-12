const users = [{
    id: 'X23423',
    name: 'Patrick Muller',
    apps: {
        "APP-MW": {
            id: 1,
            name: 'APP-MW',
            isActive: true,
            isDynamic: false,
            resources: {
                "control-panel": {
                    name: 'control-panel',
                    caption: 'Control Panel',
                    type: 'MENU',
                    permission: 22,
                    isActive: true,
                    icon: 'fa fa-gears',
                    component: 'ControlPanelComponent'
                }, 
                "settings" : {
                    name: 'settings',
                    caption: 'Settings',
                    type: 'MENU',
                    permission: 22,
                    isActive: true,
                    icon: 'fa fa-settings',
                    component: 'SettingsComponent'
                }
            },
        }
    }
}];

module.exports = users;