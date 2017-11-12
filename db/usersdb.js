//#region  Roles Table
const roles = [{
    name: 'Administrator',
    description: 'Admin Role',
    isAdmin: true,
    isActive: true
}, {
    name: 'SWP',
    description: 'Swap Users',
    isAdmin: false,
    isActive: true
}, {
    name: 'TSY',
    description: 'Tsy Users',
    isAdmin: false,
    isActive: true
}, {
    name: 'OPT',
    description: 'Option Users',
    isAdmin: false,
    isActive: true
}, {
    name: 'DEV',
    description: 'Dev Users',
    isAdmin: false,
    isActive: true
}, {
    name: 'SPRT',
    description: 'Support Users',
    isAdmin: false,
    isActive: true
}
];
//#endregion

//#region Resources
const resources = [
    {
        name: "MW-APP",
        caption: 'MW',
        type: 'APP',
        isActive: true,
        path: '/mw/index.html'
    }, {
        name: "OB-APP",
        caption: 'OB',
        type: 'APP',
        isActive: true,
        path: '/ob/index.html'
    }, {
        name: "ML-APP",
        caption: 'ML',
        type: 'APP',
        isActive: true,
        path: '/ml/index.html'
    }, {
        name: 'MAIN-MENU-VIEW',
        caption: 'View',
        type: 'MENU',
        isActive: true,
        icon: '',
        path: '',
        parent: 'JT-MAIN-APP'
    }, {
        name: 'MENU-VIEW-OB',
        caption: 'OB',
        type: 'MENU-ITEM',
        isActive: true,
        icon: 'fa fa-box',
        path: 'ObComponent',
        parent: 'MAIN-MENU-VIEW',
        target: 'OB-APP'
    }, {
        name: 'MENU-VIEW-COB',
        caption: 'COB',
        type: 'MENU-ITEM',
        isActive: true,
        icon: 'fa fa-box',
        path: 'CObComponent',
        parent: 'MAIN-MENU-VIEW',
        target: 'OB-APP'
    }, {
        name: 'MENU-VIEW-MW',
        caption: 'MW',
        type: 'MENU-ITEM',
        isActive: true,
        icon: 'fa fa-box',
        path: 'MWComponent',
        parent: 'MAIN-MENU-VIEW',
        target: 'MW-APP'
    }
];

const roles = [{
    name: 'System-Admin',
    isActive: true,
    description: 'System Administrator',
    isDeletable: false,
    isAdmin: true
}, {
    name: 'APP-USER',
    isActive: true,
    description: 'System Administrator',
    isDeletable: true,
    isAdmin: false
}];

const RoleResources = [{
    role : 'APP-USER',
    resources : {
        'MW-APP' : 'MW-APP',
        'permissions' : 8
    }
}];

//#endregion


// payload
/*const user = {
    id : 'xyz232',
    name : 'sample name',
    roleResources : {[key: string]: reources}
};*/