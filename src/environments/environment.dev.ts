import { entities } from './config.entities';

export const environment = {
    production: true,
    api: {
        url: 'http://localhost:5000',
        entities: entities,
    },
    app: {
        url: 'https://localhost:4200',
        id: 'vincent-p',
    },
    sentry: {
        configUrl: 'https://7cc4af3f1927461ea8abb8fd603fe6ce@sentry.io/1315438',
    },
    matomo: {
        url: 'matomo.vincent-p.fr',
        id: 1
    }
};
