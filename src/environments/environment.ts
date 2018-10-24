import { entities } from './config.entities';

export const environment = {
  production: false,
  api: {
    url: 'https://api.vincent-p.fr',
    entities: entities
  },
  app: {
    url: 'https://www.vincent-p.fr',
    id: 'vincent-p'
  },
  sentry: {
    configUrl: 'https://67482976a2124dd8bffbebaa5aa2eee6@sentry.we-program-it.com/2'
  }
};
