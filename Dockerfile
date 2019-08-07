FROM node:10-alpine
USER root

LABEL Version="1.0.0"
LABEL Name="www-vincent-p-fr"

RUN apk add --no-cache python \
    && npm install -g protractor pm2 @angular/cli gulp \
    && mkdir -p /app \
    && chown -R node:node /app \
    && rm -rf /root/.npm

USER node
WORKDIR /app

ENV NODE_ENV=production
ARG ANGULAR_CONFIGURATION=production
ENV ANGULAR_CONFIGURATION ${ANGULAR_CONFIGURATION}
COPY --chown=node:node . .

RUN npm install --production=true && npm run build:ssr && npm cache clear --force && gulp purifyCSS && gulp sri

EXPOSE 4000
CMD [ "pm2-runtime", "start", "ecosystem.config.js"]
