export const NavigationEnum: NavigationEnum = Object.freeze({
    DASHBOARD: {
        name: 'dashboard',
        link: '/dashboard'
    },
    NOTIFICATION: {
        name: 'notifications',
        link: '/notifications'
    },
    ACCOUNT: {
        name: 'account',
        link: '/account'
    },
    GAMES: {
        name: 'games',
        link: '/games'
    },
    DOCUMENTATION: {
        name: 'documentation',
        link: '/documentation'
    },
    COMPONENTS: {
        name: 'components',
        link: '/components'
    },
    HELP: {
        name: 'help',
        link: '/help'
    },
});

interface NavigationInterface {
    name: string,
    link: string
}

interface NavigationEnum {
    [key: string]: NavigationInterface;
}


