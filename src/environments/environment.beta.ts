import { entities } from './config.entities';

export const environment = {
    production: true,
    api: {
        url: 'https://api-beta.vincent-p.fr',
        entities: entities,
    },
    app: {
        url: 'https://beta.vincent-p.fr',
        id: 'vincent-p',
    },
    sentry: {
        configUrl: 'https://7cc4af3f1927461ea8abb8fd603fe6ce@sentry.io/1315438',
    },
    matomo: {
        url: 'https://matomo.vincent-p.fr/',
        id: 1
    }
};
