import { entities } from './config.entities';

export const environment = {
    production: false,
    api: {
        url: 'https://api.vincent-p.fr',
        entities: entities,
    },
    app: {
        url: 'https://www.vincent-p.fr',
        id: 'vincent-p',
    },
    sentry: {
        configUrl: 'https://7cc4af3f1927461ea8abb8fd603fe6ce@sentry.io/1315438',
    },
};
